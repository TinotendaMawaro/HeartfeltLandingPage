'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Function to format contact numbers to handle scientific notation and decimal typos.
const formatContact = (contact: string | number) => {
  let formattedContact = String(contact);

  // Handle scientific notation (e.g., "2.63772E+11")
  if (formattedContact.includes('E') || formattedContact.includes('e')) {
    try {
      const num = parseFloat(formattedContact);
      if (!isNaN(num)) {
        formattedContact = num.toLocaleString('fullwide', { useGrouping: false });
      }
    } catch (e) {
      console.error("Error parsing scientific notation contact:", contact, e);
    }
  }

  // Handle floating point numbers that might be malformed phone numbers (e.g., "0.999956125")
  // This is a heuristic: if it looks like a number with a single decimal point, remove the decimal.
  if (formattedContact.includes('.') && !isNaN(parseFloat(formattedContact)) && formattedContact.split('.').length === 2) {
    formattedContact = formattedContact.replace(/\./g, '');
  }

  // Remove spaces and hyphens, but preserve leading '+'
  formattedContact = formattedContact.replace(/ /g, '').replace(/-/g, '');

  return formattedContact;
};

// All zones with province/region information
const zones = [
  // Zimbabwe Zones
  { zoneName: "St Mary's", pastor: "Pastor Nziradzemhuka", contact: "0776384148", location: "Manyame Complex first shop behind Presidential borehole", country: "Zimbabwe", city: "Chitungwiza", province: "Harare Province" },
  { zoneName: "Dzivarasekwa Zone", pastor: "Prs Mtombeni", contact: "0719042167", location: "Mujakaranda, Dzivarasekwa 2. Harare", country: "Zimbabwe", city: "Harare", province: "Harare Province" },
  { zoneName: "Glenview Zone", pastor: "Pr Maminimini", contact: "0780292352", location: "Patrenda Way, Pamachurch. Glenview 3, Harare", country: "Zimbabwe", city: "Harare", province: "Harare Province" },
  { zoneName: "Epworth Zone", pastor: "Pr Muridzi", contact: "0773095391", location: "Munyuki Shade next to Service Station", country: "Zimbabwe", city: "Epworth", province: "Harare Province" },
  { zoneName: "Mbare-Retreat Zone", pastor: "Prs Bakasa", contact: "0775941833", location: "Khumbula grounds, Retreat Musasa, Waterfalls", country: "Zimbabwe", city: "Harare (Mbare-Retreat)", province: "Harare Province" },
  { zoneName: "Hatcliffe Zone", pastor: "Pr T Katso", contact: "2.63773E+11", location: "43 Street Hatcliffe", country: "Zimbabwe", city: "Hatcliffe", province: "Harare Province" },
  { zoneName: "IOC (International Overflow Center) Zone", pastor: "Heartfelt International Ministries Pastors", contact: "+263779156452", location: "Ashdown Park, Harare", country: "Zimbabwe", city: "Harare", province: "Harare Province" },


  { zoneName: "Masvingo Zone", pastor: "Pastor Nguruve", contact: "0775959036", location: "27811 Light Industry, Runyararo West, Masvingo", country: "Zimbabwe", city: "Masvingo", province: "Masvingo Province" },

  { zoneName: "Banket Zone", pastor: "Pastor Mthulisi Ndebele", contact: "0775157523", location: "Banket Primary School", country: "Zimbabwe", city: "Banket", province: "Mashonaland West Province" },
  { zoneName: "Kariba Zone", pastor: "Pst R. Mtshalanji", contact: "0779815298, 0717279773", location: "Nyanhewe Primary School", country: "Zimbabwe", city: "Kariba", province: "Mashonaland West Province" },
  { zoneName: "Norton Zone", pastor: "Prs Mlamilo", contact: "0773736650 / 0777546150", location: "30 Shonhiwa street Opposite Flamingo Flats Norton", country: "Zimbabwe", city: "Norton", province: "Mashonaland West Province" },
  { zoneName: "Turf Zone", pastor: "Pastors Mtshalanji", contact: "0784003241", location: "5533 Mhondoro Ngezi (3)", country: "Zimbabwe", city: "Mhondoro Ngezi", province: "Mashonaland West Province" },
  { zoneName: "Richland City", pastor: "Pastors N&N Zirobwa", contact: "0717500897", location: "Richland City Mhondoro Along Mubaira road", country: "Zimbabwe", city: "Mhondoro", province: "Mashonaland West Province" },
  { zoneName: "St Ives Chinhoyi", pastor: "Prs Kahoba", contact: "0773022539", location: "21141 St Ives Chinhoyi", country: "Zimbabwe", city: "Chinhoyi", province: "Mashonaland West Province" },
  { zoneName: "Rimuka Zone", pastor: "A Nemaunga", contact: "0772424593", location: "58 Mainge Rd, Chisangano hall", country: "Zimbabwe", city: "Kadoma (Rimuka)", province: "Mashonaland West Province" },

  { zoneName: "Gweru City", pastor: "Pastors V & P Zikhali", contact: "0776328828 / 0772946271", location: "Gweru Midlands Show Society", country: "Zimbabwe", city: "Gweru", province: "Midlands Province" },
  { zoneName: "Gweru City Zone", pastor: "Pastors V & P Zikhali", contact: "0776328828 / 0772946271", location: "Gweru Midlands Show Society", country: "Zimbabwe", city: "Gweru", province: "Midlands Province" },
  { zoneName: "Mkoba Zone", pastor: "Pst B Mutasa", contact: "0772392270", location: "Bumburwi Primary school, Mkoba 6 Gweru", country: "Zimbabwe", city: "Gweru", province: "Midlands Province" },
  { zoneName: "Kwekwe City Zone", pastor: "Pastor S Utahwashe", contact: "0775333649", location: "8394 Glenwood Kwekwe", country: "Zimbabwe", city: "Kwekwe", province: "Midlands Province" },
  { zoneName: "Senga Zone", pastor: "Prs Musevenzo", contact: "0772358448 / 0785268275", location: "Precious Gem nursery school. CBZ Nehosho. SENGA", country: "Zimbabwe", city: "Senga", province: "Midlands Province" },

  { zoneName: "Nkulumane Zone", pastor: "Pr Amos Mbofana & Shingirai Mbofana", contact: "0.999956125", location: "Nkulumane Sekusile 3459 BCC Hall", country: "Zimbabwe", city: "Bulawayo", province: "Bulawayo Province" },

  { zoneName: "Marondera Rusike", pastor: "Psts Chari", contact: "0773219569 / 0773754785", location: "Number 3731 Museve Road Rusike phase 1 Marondera", country: "Zimbabwe", city: "Marondera", province: "Mashonaland East Province" },
  { zoneName: "Domboshava Zone", pastor: "Prs Chitowo", contact: "0718249572", location: "58 Edger Products Domboshava Showground", country: "Zimbabwe", city: "Domboshava", province: "Mashonaland East Province" },
  { zoneName: "Dema Zone", pastor: "Pastor's K and S Nyamayaro", contact: "0774110151", location: "Highway turn off, Chinamano village Dema", country: "Zimbabwe", city: "Dema", province: "Mashonaland East Province" },
  { zoneName: "Mutawatawa Zone", pastor: "Prs Mhavasha", contact: "0772998564", location: "1288 Mutawatawa, opposite Clinic.", country: "Zimbabwe", city: "Mutawatawa", province: "Mashonaland East Province" },

  { zoneName: "Bindura Chipadze", pastor: "Pastors Kuhlengisa", contact: "0772496505", location: "Tendayi Hall, Chipadze, Bindura", country: "Zimbabwe", city: "Bindura", province: "Mashonaland Central Province" },

  { zoneName: "Chikanga Zone", pastor: "Pastors Musabayana", contact: "2.63772E+11", location: "8595 Magamba Drive, Mutare", country: "Zimbabwe", city: "Mutare", province: "Manicaland Province" },

  // International Zones
  { zoneName: "Kempton Park", pastor: "Prs Tsiko", contact: "27619413568", location: "12 Margaret Street Kempton Park Johannesburg", country: "South Africa", city: "Johannesburg", province: "Gauteng (South Africa)" },
  { zoneName: "Joburg", pastor: "Prs Gandiwa", contact: "+27 659852110", location: "180 Pereira Street shop no 3 Rosetenville Johannesburg", country: "South Africa", city: "Johannesburg", province: "Gauteng (South Africa)" },
  { zoneName: "Durban Zone", pastor: "Pr Sihle", contact: "+27 765 123 456", location: "Durban City Hall", country: "South Africa", city: "Durban", province: "KwaZulu-Natal (South Africa)" },
  { zoneName: "Cape Town Zone", pastor: "Pr Lunga", contact: "+27 821 987 654", location: "Cape Town Convention Centre", country: "South Africa", city: "Cape Town", province: "Western Cape (South Africa)" },

  { zoneName: "Blantyre", pastor: "Prs Chima", contact: "+256 992 277 973; +265 997 163 941", location: "Namiwawa Secondary School, Off Sanjika Road, Blantyre", country: "Malawi", city: "Blantyre", province: "Southern Region (Malawi)" },
  { zoneName: "Mozambique Zone", pastor: "Pr Manuel", contact: "+258 84 123 4567", location: "Maputo Central Church", country: "Mozambique", city: "Maputo", province: "Maputo Province (Mozambique)" },
  { zoneName: "Dubai Zone", pastor: "Pr Ali", contact: "+971 50 123 4567", location: "Dubai World Trade Centre", country: "UAE", city: "Dubai", province: "Dubai (UAE)" },
  { zoneName: "Texas Zone", pastor: "Pr John", contact: "+1 214 123 4567", location: "Dallas Convention Center", country: "USA", city: "Dallas", province: "Texas (USA)" },
  { zoneName: "UK Zone", pastor: "Pr Sarah", contact: "+44 7912 345678", location: "London Excel Centre", country: "UK", city: "London", province: "England (UK)" },
];

const ZonesPage = () => {
  // State to keep track of the currently expanded province
  const [expandedProvince, setExpandedProvince] = useState<string | null>(null);
  // State to store the search term
  const [search, setSearch] = useState('');

  // Central contact number for all zones
  const centralContactNumber = "+263779156452";

  // Memoize the grouping of zones by province
  const zonesByProvince = useMemo(() => {
    const grouped: Record<string, any[]> = {};
    zones.forEach(zone => {
      const provinceKey = zone.province || "Other"; // Use "Other" if no province is defined
      if (!grouped[provinceKey]) {
        grouped[provinceKey] = [];
      }
      grouped[provinceKey].push(zone);
    });
    // Sort provinces alphabetically
    return Object.keys(grouped).sort().reduce((obj, key) => {
      obj[key] = grouped[key];
      return obj;
    }, {});
  }, [zones]); // Re-calculate if the zones data changes

  // Function to toggle province expansion
  const toggleProvince = (province: string) => {
    setExpandedProvince(prev => (prev === province ? null : province));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* The main container now uses responsive padding: px-4 on small, sm:px-6 on medium, lg:px-8 on large */}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Central Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-6 bg-white rounded-xl shadow-lg text-center border border-indigo-200"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-800 mb-3">You are looking for a nearest Heartfelt International Ministry zone? Let's talk</h3>
          <a href={`tel:${centralContactNumber}`} className="text-2xl sm:text-3xl font-extrabold text-indigo-600 hover:text-indigo-700 transition duration-300 ease-in-out">
            {centralContactNumber}
          </a>
          <div className="flex justify-center mt-5 space-x-4 sm:space-x-5">
            {/* General Social Media Icons */}
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/HeartfeltTV" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
                <path d="M12 2.04C6.5 2.04 2 6.54 2 12.04c0 4.97 3.61 9.12 8.36 9.94v-7.04H7.2V12.04h3.16V9.48c0-3.13 1.9-4.85 4.7-4.85 1.34 0 2.49.24 2.83.36v3.08h-1.84c-1.45 0-1.74.69-1.74 1.7v2.24h3.45l-.56 3.5h-2.89v7.04C18.39 21.16 22 17.01 22 12.04 22 6.54 17.5 2.04 12 2.04z"/>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com/heartfelt_int" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
                <path d="M22.46 5.86c-.77.34-1.6.56-2.46.66.89-.54 1.57-1.39 1.89-2.42-.83.49-1.76.85-2.75 1.04-.79-.84-1.92-1.37-3.17-1.37-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.11.99-3.62-.18-6.84-1.92-8.99-4.55-.37.64-.58 1.38-.58 2.18 0 1.51.77 2.84 1.94 3.62-.71-.02-1.38-.22-1.96-.54v.05c0 2.11 1.5 3.86 3.49 4.26-.36.1-.74.15-1.13.15-.28 0-.55-.03-.82-.08.55 1.73 2.15 2.99 4.05 3.02-1.49 1.17-3.37 1.87-5.43 1.87-.35 0-.69-.02-1.03-.06 1.93 1.24 4.22 1.97 6.69 1.97 8.03 0 12.42-6.65 12.42-12.42 0-.19-.01-.38-.01-.57.85-.61 1.58-1.37 2.16-2.24z"/>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/apostletvutabwashe" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.899.422.422.682.82.899 1.382.166.422.36 1.057.415 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.899 1.382-.422.422-.682.82-.899 1.382-.166.422-.36-1.057-.415-2.227-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.899-1.382.422-.422.82-.682 1.382-.899.422-.166 1.057-.36 2.227-.415 1.266-.059 1.646-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-1.272.06-2.1.265-2.673.484-.61.233-1.161.564-1.697 1.101-.536.536-.867 1.087-1.101 1.697-.219.573-.424 1.401-.484 2.673-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.06 1.272.265 2.1.484 2.673.233.61.564 1.161 1.101 1.697.536.536 1.087.867 1.101 1.697.219-.573.424-1.401.484-2.673.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.272-.265-2.1-.484-2.673-.233-.61-.564-1.161-1.101-1.697-.536-.536-1.087-.867-1.697-1.101-.573-.219-1.401-.424-2.673-.484-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search zone name, location, city, country..." // Updated placeholder
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-base sm:text-lg"
            aria-label="Search zones"
          />
        </motion.div>

        {/* Provinces and their zones */}
        {Object.entries(zonesByProvince).map(([province, zonesInProvince]) => {
          // Filter zones within the current province based on the search term
          const filteredZonesInProvince = zonesInProvince.filter(z =>
            Object.values(z).some(v => String(v).toLowerCase().includes(search.toLowerCase()))
          );

          // Only show the province if there are matching zones within it
          if (filteredZonesInProvince.length === 0 && search !== '') return null;
          // If search is empty, show all provinces and their zones
          // This condition ensures that when the search is empty, all provinces are shown,
          // and if a province is not expanded, it remains collapsed.
          if (search === '' && expandedProvince !== province && filteredZonesInProvince.length > 0) {
            return (
              <motion.div
                key={province}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 p-4 bg-white rounded-xl shadow-lg border border-indigo-200"
              >
                <button
                  onClick={() => toggleProvince(province)}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-indigo-700 mb-4 hover:text-indigo-900 transition duration-300 flex justify-between items-center py-2 px-3 rounded-md bg-indigo-50 hover:bg-indigo-100"
                >
                  {province}
                  <motion.span
                    animate={{ rotate: 0 }} // Always show collapsed icon when not expanded
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
              </motion.div>
            );
          }


          return (
            <motion.div
              key={province}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 p-4 bg-white rounded-xl shadow-lg border border-indigo-200"
            >
              {/* Province button to toggle zones */}
              <button
                onClick={() => toggleProvince(province)}
                className="w-full text-left text-xl sm:text-2xl font-bold text-indigo-700 mb-4 hover:text-indigo-900 transition duration-300 flex justify-between items-center py-2 px-3 rounded-md bg-indigo-50 hover:bg-indigo-100"
              >
                {province}
                {/* Icon to indicate expanded/collapsed state */}
                <motion.span
                  animate={{ rotate: expandedProvince === province ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              {/* Zones within the province, shown when province is expanded */}
              {expandedProvince === province && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4" /* Adjusted gap for better spacing on smaller screens */
                >
                  {/* Render filtered zones */}
                  {filteredZonesInProvince.map((zone, index) => (
                    <motion.div
                      key={zone.zoneName + zone.city + zone.province} // Unique key
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="border border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-between text-sm sm:text-base" /* Adjusted padding and font size for responsiveness */
                    >
                      <div>
                        {/* Zone Name */}
                        <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-2">
                          {zone.zoneName}
                        </h2>
                        {/* Static text for ministry */}
                        <p className="font-medium text-gray-700 mb-2">Heartfelt International Ministries</p>
                        {/* Location */}
                        <p><strong>Location:</strong> {zone.location}</p>
                        {/* City */}
                        <p><strong>City:</strong> {zone.city}</p>
                        {/* Country */}
                        <p><strong>Country:</strong> {zone.country}</p>
                        {/* Province (if available) */}
                        {zone.province && <p><strong>Province:</strong> {zone.province}</p>}
                      </div>
                      {/* WhatsApp Icon */}
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`https://wa.me/${formatContact(zone.contact)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-sm sm:text-base" /* Adjusted padding and font size for responsiveness */
                        aria-label={`Contact ${zone.zoneName} via WhatsApp`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2">
                          <path d="M12.04 2C7.03 2 3 6.03 3 11.04c0 1.78.5 3.45 1.45 4.95L3.08 20.12l4.2-1.12c1.47.8 3.16 1.25 4.76 1.25 5.01 0 9.04-4.03 9.04-9.04S17.05 2 12.04 2zm3.62 13.43c-.1.17-.22.25-.46.33-.23.08-.49.12-.76.12-.27 0-.54-.04-.8-.12-.27-.08-.5-.17-.7-.25-.4-.17-.83-.4-1.2-.68-.37-.28-.7-.6-.97-.97-.27-.37-.5-.7-.68-1.07-.17-.37-.25-.7-.33-1.07-.08-.37-.12-.7-.12-1.07 0-.27.04-.54.12-.8.08-.27.17-.5.25-.7.17-.27.37-.49.6-.7.23-.21.49-.37.76-.49.27-.12.54-.17.8-.17.27 0 .54.04.8.12.27.08.5.17.7.25.17.08.33.17.46.25.13.08.25.17.33.25.08.1.17.21.25.33.08.13.12.25.12.46 0 .27-.04.54-.12.8-.08.27-.17.5-.25.7z"/>
                        </svg>
                        WhatsApp
                      </motion.a>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}
        {/* Note about updating zone information */}
        <div className="mt-12 p-4 bg-gray-100 rounded-xl text-center text-gray-600 shadow-md border border-gray-200">
          <p className="mb-2">
            For updates to zone information (e.g., pastors and Zone address ), please contact +263779156452.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default ZonesPage;
