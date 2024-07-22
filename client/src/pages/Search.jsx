import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'created_at',
    order: 'desc',
  });

  const [loading,setLoading] = useState(false);
  const [listings,setListings] = useState([]);
  console.log(listings);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const offerFromUrl = urlParams.get('offer');
    const parkingFromUrl = urlParams.get('parking');
    const furnishedFromUrl = urlParams.get('furnished');
    const orderFromUrl = urlParams.get('order');
    const sortFromUrl = urlParams.get('sort');

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      offerFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      orderFromUrl ||
      sortFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all',
        offer: offerFromUrl === 'true',
        parking: parkingFromUrl === 'true',
        furnished: furnishedFromUrl === 'true',
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc',
      });
    }
    const fetchListings = async () =>{
        setLoading(true);
        const searchQuery = urlParams.toString();
        const res = await fetch(`/api/listing/get?${searchQuery}`);
        const data = await res.json();
        setListings(data);
        setLoading(false);
    };
    fetchListings();

  }, [window.location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'all' || e.target.id === 'rent' || e.target.id === 'sale') {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }
    if (e.target.id === 'searchTerm') {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }
    if (e.target.id === 'parking' || e.target.id === 'furnished' || e.target.id === 'offer') {
      setSidebardata({ ...sidebardata, [e.target.id]: e.target.checked });
    }
    if (e.target.id === 'sort_order') {
      const [sort, order] = e.target.value.split('_');
      setSidebardata({ ...sidebardata, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebardata.searchTerm);
    urlParams.set('type', sidebardata.type);
    urlParams.set('parking', sidebardata.parking);
    urlParams.set('furnished', sidebardata.furnished);
    urlParams.set('offer', sidebardata.offer);
    urlParams.set('sort', sidebardata.sort);
    urlParams.set('order', sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className='flex flex-col md:flex-row md:min-h-screen'>
      <div className='p-7 border-b-2 md:border-r-2'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>Search Term:</label>
            <input
              type='text'
              id='searchTerm'
              className='border rounded-lg p-3 w-full'
              placeholder='Search...'
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Type:</label>
            <div className='flex gap-2'>
              <input type='checkbox' id='all' className='w-5' onChange={handleChange} checked={sidebardata.type === 'all'} />
              <span>Rent & Sale</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='rent' className='w-5' onChange={handleChange} checked={sidebardata.type === 'rent'} />
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='sale' className='w-5' onChange={handleChange} checked={sidebardata.type === 'sale'} />
              <span>Sale</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='offer' className='w-5' onChange={handleChange} checked={sidebardata.offer} />
              <span>Offer</span>
            </div>
          </div>
          <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Amenities:</label>
            <div className='flex gap-2'>
              <input type='checkbox' id='parking' className='w-5' onChange={handleChange} checked={sidebardata.parking} />
              <span>Parking</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='furnished' className='w-5' onChange={handleChange} checked={sidebardata.furnished} />
              <span>Furnished</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <select className='rounded-lg border p-3' id='sort_order' onChange={handleChange} defaultValue={'created_at_desc'}>
              <option value='regularPrice_desc'>Price high to low</option>
              <option value='regularPrice_asc'>Price low to high</option>
              <option value='createdAt_desc'>Latest</option>
              <option value='createdAt_asc'>Oldest</option>
            </select>
          </div>
          <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>
            Search
          </button>
        </form>
      </div>
      <div>
        <h1 className='font-semibold text-3xl mt-5 p-3 border-b text-slate-700'>Listing results:</h1>
      </div>
    </div>
  )
}
