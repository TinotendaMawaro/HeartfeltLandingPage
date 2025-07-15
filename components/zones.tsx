'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const zones = [
  { zoneName: "St Mary's", pastor: "Pastor Nziradzemhuka", contact: "0776384148", location: "Manyame Complex first shop behind Presidential borehole", country: "Zimbabwe", city: "Chitungwiza" },
  { zoneName: "Kempton Park", pastor: "Prs Tsiko", contact: "27619413568", location: "12 Margaret Street Kempton Park Johannesburg", country: "South Africa", city: "Johannesburg" },
  { zoneName: "Dzivarasekwa Zone", pastor: "Prs Mtombeni", contact: "0719042167", location: "Mujakaranda, Dzivarasekwa 2. Harare", country: "Zimbabwe", city: "Harare" },
  { zoneName: "Glenview Zone", pastor: "Pr Maminimini", contact: "0780292352", location: "Patrenda Way, Pamachurch. Glenview 3, Harare", country: "Zimbabwe", city: "Harare" },
  { zoneName: "Masvingo Zone", pastor: "Pastor Nguruve", contact: "0775959036", location: "27811 Light Industry, Runyararo West, Masvingo", country: "Zimbabwe", city: "Masvingo" },
  { zoneName: "Banket Zone", pastor: "Pastor Mthulisi Ndebele", contact: "0775157523", location: "Banket Primary School", country: "Zimbabwe", city: "Banket" },
  { zoneName: "Gweru City", pastor: "Pastors V & P Zikhali", contact: "0776328828 / 0772946271", location: "Gweru Midlands Show Society", country: "Zimbabwe", city: "Gweru" },
  { zoneName: "Nkulumane Zone", pastor: "Pr Amos Mbofana & Shingirai Mbofana", contact: "0.999956125", location: "Nkulumane Sekusile 3459 BCC Hall", country: "Zimbabwe", city: "Bulawayo" },
  { zoneName: "Kariba Zone", pastor: "Pst R. Mtshalanji", contact: "0779815298, 0717279773", location: "Nyanhewe Primary School", country: "Zimbabwe", city: "Kariba" },
  { zoneName: "Marondera Rusike", pastor: "Psts Chari", contact: "0773219569 / 0773754785", location: "Number 3731 Museve Road Rusike phase 1 Marondera", country: "Zimbabwe", city: "Marondera" },
  { zoneName: "Norton Zone", pastor: "Prs Mlamilo", contact: "0773736650 / 0777546150", location: "30 Shonhiwa street Opposite Flamingo Flats Norton", country: "Zimbabwe", city: "Norton" },
  { zoneName: "Blantyre", pastor: "Prs Chima", contact: "+256 992 277 973; +265 997 163 941", location: "Namiwawa Secondary School, Off Sanjika Road, Blantyre", country: "Malawi", city: "Blantyre" },
  { zoneName: "Turf Zone", pastor: "Pastors Mtshalanji", contact: "0784003241", location: "5533 Mhondoro Ngezi (3)", country: "Zimbabwe", city: "Mhondoro Ngezi" },
  { zoneName: "Richland City", pastor: "Pastors N&N Zirobwa", contact: "0717500897", location: "Richland City Mhondoro Along Mubaira road", country: "Zimbabwe", city: "Mhondoro" },
  { zoneName: "Domboshava Zone", pastor: "Prs Chitowo", contact: "0718249572", location: "58 Edger Products Domboshava Showground", country: "Zimbabwe", city: "Domboshava" },
  { zoneName: "Epworth Zone", pastor: "Pr Muridzi", contact: "0773095391", location: "Munyuki Shade next to Service Station", country: "Zimbabwe", city: "Epworth" },
  { zoneName: "Bindura Chipadze", pastor: "Pastors Kuhlengisa", contact: "0772496505", location: "Tendayi Hall, Chipadze, Bindura", country: "Zimbabwe", city: "Bindura" },
  { zoneName: "Gweru City Zone", pastor: "Pastors V & P Zikhali", contact: "0776328828 / 0772946271", location: "Gweru Midlands Show Society", country: "Zimbabwe", city: "Gweru" },
  { zoneName: "Dema Zone", pastor: "Pastor's K and S Nyamayaro", contact: "0774110151", location: "Highway turn off, Chinamano village Dema", country: "Zimbabwe", city: "Dema" },
  { zoneName: "Mkoba Zone", pastor: "Pst B Mutasa", contact: "0772392270", location: "Bumburwi Primary school, Mkoba 6 Gweru", country: "Zimbabwe", city: "Gweru" },
  { zoneName: "Kwekwe City Zone", pastor: "Pastor S Utahwashe", contact: "0775333649", location: "8394 Glenwood Kwekwe", country: "Zimbabwe", city: "Kwekwe" },
  { zoneName: "St Ives Chinhoyi", pastor: "Prs Kahoba", contact: "0773022539", location: "21141 St Ives Chinhoyi", country: "Zimbabwe", city: "Chinhoyi" },
  { zoneName: "Mutawatawa Zone", pastor: "Prs Mhavasha", contact: "0772998564", location: "1288 Mutawatawa, opposite Clinic.", country: "Zimbabwe", city: "Mutawatawa" },
  { zoneName: "Joburg", pastor: "Prs Gandiwa", contact: "+27 659852110", location: "180 Pereira Street shop no 3 Rosetenville Johannesburg", country: "South Africa", city: "Johannesburg" },
  { zoneName: "Chikanga Zone", pastor: "Pastors Musabayana", contact: "2.63772E+11", location: "8595 Magamba Drive, Mutare", country: "Zimbabwe", city: "Mutare" },
  { zoneName: "Senga Zone", pastor: "Prs Musevenzo", contact: "0772358448 / 0785268275", location: "Precious Gem nursery school. CBZ Nehosho. SENGA", country: "Zimbabwe", city: "Senga" },
  { zoneName: "Rimuka Zone", pastor: "A Nemaunga", contact: "0772424593", location: "58 Mainge Rd, Chisangano hall", country: "Zimbabwe", city: "Kadoma (Rimuka)" },
  { zoneName: "Mbare-Retreat Zone", pastor: "Prs Bakasa", contact: "0775941833", location: "Khumbula grounds, Retreat Musasa, Waterfalls", country: "Zimbabwe", city: "Harare (Mbare-Retreat)" },
  { zoneName: "Hatcliffe Zone", pastor: "Pr T Katso", contact: "2.63773E+11", location: "43 Street Hatcliffe", country: "Zimbabwe", city: "Hatcliffe" }
];

const ZonesPage = () => {
  const [search, setSearch] = useState('');

  const filteredZones = zones.filter(zone =>
    Object.values(zone).some(val =>
      val.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8 flex justify-center">
  <input
    type="text"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search by name, pastor, city..."
    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />
</div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredZones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition bg-gradient-to-br from-indigo-50 to-white"
            >
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">
                {zone.zoneName}
              </h2>
              <p><strong>Pastor:</strong> {zone.pastor}</p>
              <p><strong>Contact:</strong> {zone.contact}</p>
              <p><strong>Location:</strong> {zone.location}</p>
              <p><strong>City:</strong> {zone.city}</p>
              <p><strong>Country:</strong> {zone.country}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZonesPage;
