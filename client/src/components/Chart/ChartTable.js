import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chart = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const chartStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '25px',
    padding: '20px'
  }

  useEffect(() => {
    const apiKey = "1850ecd658611924cea220ccc78bc5e2039b7a992fc2a3ad708300ed180a03dc"

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=356&api_key=${apiKey}`
        );

        // const responseData = response.data;
          console.log(response.data, 'hello')
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    // fetchData();
  }, []);

  useEffect(() => {
    const fetchTopCryptocurrencies = async () => {
      try {
        const response = await axios.get(
          'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        );
        const data = response.data;

        // Extracting necessary information from the API response
        const tableData = data.Data.map((crypto, index) => {
          const { CoinInfo, RAW } = crypto;
          const currentPrice = RAW.USD.PRICE;
          const previousPrice = RAW.USD.OPENDAY;

          const percentageChange = ((currentPrice - previousPrice) / previousPrice) * 100;

          return {
            rank: index + 1,
            name: CoinInfo.FullName,
            symbol: CoinInfo.Name,
            price: RAW.USD.PRICE,
            percentageChange,
          };
        });

        // Updating state with the fetched data
        setCryptocurrencies(tableData);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    };

    fetchTopCryptocurrencies();
  }, []);
  
  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
  return (
<div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    //   <div style={chartStyle}>
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="sm:flex sm:items-center">
    //       <div className="sm:flex-auto">
    //         <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
    //         <p className="mt-2 text-sm text-gray-700">
    //           A list of all the users in your account including their name, title, email and role.
    //         </p>
    //       </div>
    //       <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
    //         <button
    //           type="button"
    //           className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //         >
    //           Add user
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-8 flow-root overflow-hidden">
    //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //       <table className="w-full text-left">
    //         <thead className="bg-white">
    //           <tr>
    //             <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
    //               Name
    //               <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
    //               <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
    //             </th>
    //             <th
    //               scope="col"
    //               className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
    //             >
    //               Title
    //             </th>
    //             <th
    //               scope="col"
    //               className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
    //             >
    //               Email
    //             </th>
    //             <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
    //               Role
    //             </th>
    //             <th scope="col" className="relative py-3.5 pl-3">
    //               <span className="sr-only">Edit</span>
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {people.map((person) => (
    //             <tr key={person.email}>
    //               <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
    //                 {person.name}
    //                 <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
    //                 <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
    //               </td>
    //               <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.title}</td>
    //               <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">{person.email}</td>
    //               <td className="px-3 py-4 text-sm text-gray-500">{person.role}</td>
    //               <td className="relative py-4 pl-3 text-right text-sm font-medium">
    //                 <a href="#" className="text-indigo-600 hover:text-indigo-900">
    //                   Edit<span className="sr-only">, {person.name}</span>
    //                 </a>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Chart;