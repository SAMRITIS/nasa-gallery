import "../Selector.css";

const Selector = ({ getSelectedOption }) => {
  const options = [
    {
      type: "Planet",
      values: [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Venus",
        "Mercury",
        "Sun",
        "Neptune",
        "Uranus",
        "Pluto",
        "Exoplanet Kepler-186f",
        "Exoplanet Proxima Centauri b",
      ],
    },
    {
      type: "Star",
      values: [
        "Betelgeuse",
        "Sirius",
        "Proxima Centauri",
        "Alpha Centauri A",
        "Rigel",
        "Antares",
        "Vega",
        "Altair",
        "Deneb",
        "Polaris",
        "HD 209458 b",
      ],
    },
    {
      type: "Galaxy",
      values: [
        "Andromeda Galaxy",
        "Milky Way Galaxy",
        "Whirlpool Galaxy",
        "Triangulum Galaxy",
        "Sombrero Galaxy",
        "Messier 87",
        "NGC 1300",
        "Cigar Galaxy",
        "Pinwheel Galaxy",
        "Cartwheel Galaxy",
      ],
    },
    {
      type: "Rocket",
      values: [
        "Saturn I",
        "Saturn IB",
        "Saturn V",
        "Atlas",
        "Titan II",
        "Titan III",
        "Titan IV",
        "Space Shuttle",
        "Space Launch System",
        "Delta II",
        "Delta IV",
        "Falcon 9",
        "Falcon Heavy",
        "Viking",
        "Pegasus",
        "Antares",
        "Ares I",
        "Ares V",
        "Minotaur",
        "Electron",
        "Zuma",
        "Arianne 5",
        "Soyuz",
        "SpaceX Starship",
        "New Glenn",
        "Long March 5",
        "Falcon 1",
      ],
    },
    {
      type: "Mission",
      values: [
        "Mars Exploration Program",
        "Voyager Program",
        "Hubble Space Telescope Research",
        "Kepler Mission",
        "James Webb Space Telescope Research",
        "International Space Station Research",
        "Aeronautics Research Mission Directorate",
        "Global Climate Change Research",
        "Lunar Exploration Program",
        "Microgravity Research",
        "Technology Development and Demonstration",
        "Space Weather Research",
        "Exoplanet Research",
        "Psyche Mission Research",
        "DART Mission Research",
        "NASA's Innovative Advanced Concepts",
        "Sustainable Aviation Research",
        "NASA's Climate Change Research Initiative",
        "Ocean World Research",
        "Astrophysics Data System",
        "Space Biology Research",
        "Green Aviation Research",
        "Atmospheric Science Research",
        "Suborbital Research Program",
        "Apollo 1",
        "Apollo 7",
        "Apollo 8",
        "Apollo 9",
        "Apollo 10",
        "Apollo 11",
        "Apollo 12",
        "Apollo 13",
        "Apollo 14",
        "Apollo 15",
        "Apollo 16",
        "Apollo 17",
        "Apollo-Soyuz Test Project",
        "Skylab",
        "Mars Viking 1",
        "Mars Viking 2",
        "Voyager 1",
        "Voyager 2",
        "Pioneer 10",
        "Pioneer 11",
        "Hubble Space Telescope",
        "Mars Pathfinder",
        "Mars Global Surveyor",
        "Mars Odyssey",
        "Spirit Rover",
        "Opportunity Rover",
        "Mars Curiosity Rover",
        "Mars Perseverance Rover",
        "Cassini-Huygens",
        "Juno",
        "New Horizons",
        "Artemis I",
        "Artemis II",
        "Artemis III",
        "Gemini 1",
        "Gemini 2",
        "Gemini 3",
        "Gemini 4",
        "Gemini 5",
        "Gemini 6A",
        "Gemini 7",
        "Gemini 8",
        "Gemini 9A",
        "Gemini 10",
        "Gemini 11",
        "Gemini 12",
        "Lunar Reconnaissance Orbiter",
        "Kepler",
        "STEREO",
        "TESS",
        "SOFIA",
        "OSIRIS-REx",
        "InSight",
        "DART",
        "Chandrayaan",
        "Psyche",
        "James Webb Space Telescope",
        "Mars Sample Return",
      ],
    },
    {
      type: "Scientist",
      values: [
        "Margaret Hamilton",
        "Katherine Johnson",
        "Dorothy Vaughan",
        "Mary Jackson",
        "Wernher von Braun",
        "Carl Sagan",
        "James Hansen",
        "John C. Aaron",
        "Gene Kranz",
        "Charles Bolden",
        "Eileen Collins",
        "Alan Bean",
        "Frank Borman",
        "Sally Ride",
        "Christina H. Koch",
        "Sunita Williams",
        "Mae Jemison",
        "Jim Lovell",
        "Charles Duke",
        "Bob Crippen",
        "Leland Melvin",
        "Owen Garriott",
        "Rick Husband",
        "Ken Bowersox",
        "David Scott",
        "Mark Vande Hei",
        "Richard Feynman",
        "Neil deGrasse Tyson",
        "Bill Nye",
        "Buzz Aldrin",
      ],
    },
    {
      type: "Research Area",
      values: [
        "Astrobiology",
        "Earth Science Research",
        "Planetary Science Research",
        "Heliophysics Research",
        "Astrophysics Research",
        "Space Biology Research",
        "Green Aviation Research",
        "Atmospheric Science Research",
        "Global Climate Change Research",
        "Ocean World Research",
        "Exoplanet Research",
        "Technology Development and Demonstration",
        "Suborbital Research Program",
        "Microgravity Research",
        "Lunar Exploration Program",
        "NASA's Climate Change Research Initiative",
        "Sustainable Aviation Research",
        "Space Weather Research",
        "DART Mission Research",
        "NASA's Innovative Advanced Concepts",
        "Deep Space Exploration",
        "Aeronautics Research",
        "Astrobiotic Research",
        "Exoplanet Characterization",
        "Planetary Protection Research",
      ],
    },
    {
      type: "Space Telescope",
      values: [
        "Hubble Space Telescope",
        "James Webb Space Telescope",
        "Kepler Space Telescope",
        "Chandra X-ray Observatory",
        "Spitzer Space Telescope",
        "SOFIA",
        "TESS",
        "Fermi Gamma-ray Space Telescope",
        "WISE",
      ],
    },
    {
      type: "Space Probe",
      values: [
        "Voyager 1",
        "Voyager 2",
        "Pioneer 10",
        "Pioneer 11",
        "New Horizons",
        "Cassini-Huygens",
        "Juno",
        "OSIRIS-REx",
        "DART",
        "Mariner 10",
        "Pioneer Venus",
        "Dawn",
        "Parker Solar Probe",
      ],
    },
    {
      type: "Asteroid",
      values: [
        "Ceres",
        "Vesta",
        "Bennu",
        "Itokawa",
        "Eros",
        "Ryugu",
        "Psyche",
        "Apophis",
        "99942 Apophis",
        "2001 FO32",
      ],
    },
    {
      type: "Comet",
      values: [
        "Halley's Comet",
        "Comet NEOWISE",
        "Comet Hale-Bopp",
        "Comet Shoemaker-Levy 9",
        "Comet 67P/Churyumov-Gerasimenko",
        "Comet Tempel 1",
        "Comet Encke",
      ],
    },
    {
      type: "Cosmic Phenomena",
      values: [
        "Supernova",
        "Black Hole",
        "Neutron Star",
        "Pulsar",
        "Quasar",
        "Gamma-Ray Burst",
        "Dark Matter",
        "Dark Energy",
        "Gravitational Waves",
        "Cosmic Microwave Background Radiation",
      ],
    },
    {
      type: "Space Agency",
      values: [
        "NASA",
        "ESA",
        "Roscosmos",
        "CNSA",
        "ISRO",
        "JAXA",
        "CSA",
        "UAE Space Agency",
      ],
    },
    {
      type: "Notable Events",
      values: [
        "First Moon Landing",
        "Launch of Hubble Space Telescope",
        "Mars Rover Opportunity's Last Signal",
        "Voyager 1 Enters Interstellar Space",
        "First Image of a Black Hole",
        "Discovery of Water on Mars",
        "Landing of Perseverance Rover",
        "First Successful Powered Flight on Mars",
      ],
    },
  ];

  const setPlanet = (e) => {
    getSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="select-main">
        <p>Select Astronomical keywords</p>
        <select onChange={setPlanet}>
          {" "}
          <option value="">Select a keyword...</option>{" "}
          {options.map((element, index) => {
            return (
              <optgroup label={element.type}>
                {element.values.map((element, index) => {
                  return (
                    <option key={index} value={element}>
                      {" "}
                      {element}
                    </option>
                  );
                })}
              </optgroup>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Selector;
