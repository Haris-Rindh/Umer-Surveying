/**
 * Umer Surveying™ — Professional Equipment & Technology Arsenal
 * Field-tested hardware and computational software deployed on client lands.
 */

export const equipmentData = [
  {
    id: "total-station",
    title: "Electronic Total Stations",
    category: "Optical & Infrared Metrology",
    accuracy: "Sub-Centimeter (0.5\" Angular Precision)",
    description: "High-precision electro-optical instruments combining electronic theodolites with infrared distance meters (EDM) to record exact horizontal angles, zenith angles, and slope distances for closed boundary loops and topographic sheets.",
    applications: [
      "Closed traverse loops with verified linear misclosure",
      "Sub-centimeter structural pin demarcations",
      "Dense spot-elevation grids for digital elevation modeling",
      "Municipal road cross-sections and alignment staking"
    ],
    badge: "PRIMARY FIELD METROLOGY"
  },
  {
    id: "rtk-gnss",
    title: "Dual-Frequency RTK GNSS / GPS",
    category: "Satellite Geodesy",
    accuracy: "Centimetric Real-Time Kinematic",
    description: "Multi-constellation satellite receivers (GPS, GLONASS, Galileo, BeiDou) linked to national geodetic control networks and real-time correction bases for instantaneous, repeatable coordinate positioning across vast acreages.",
    applications: [
      "Large-scale agricultural parcel boundary surveys",
      "Georeferencing control points for drone & GIS overlays",
      "Long-corridor highway and canal alignment surveys",
      "Survey of Pakistan benchmark datum synchronization"
    ],
    badge: "SATELLITE POSITIONING"
  },
  {
    id: "auto-levels",
    title: "Precision Optical & Digital Auto-Levels",
    category: "Vertical Geodesy & Leveling",
    accuracy: "1.0 mm / km Double Run",
    description: "Calibrated optical compensator leveling gear deployed for precise height transfers, vertical benchmark networks, drainage gradient profiling, and construction floor elevation verification.",
    applications: [
      "Benchmark elevation transfer from Survey of Pakistan monuments",
      "Sewerage invert levels and municipal storm line grading",
      "Earthwork cut-and-fill slope stake verification",
      "Foundation settling and differential leveling monitoring"
    ],
    badge: "VERTICAL BENCHMARKS"
  },
  {
    id: "gis-cad",
    title: "CAD & GIS Spatial Processing Workstations",
    category: "Computational Geomatics",
    accuracy: "Vector CAD / Geodatabase Standards",
    description: "Dedicated drafting and spatial database workstations running AutoCAD Civil 3D, ArcGIS, QGIS, and Google Earth Pro for coordinate conversion, digital terrain modeling, and certified plat drafting.",
    applications: [
      "Certified legal cadastral boundary plats and Aks Shajra maps",
      "Georeferenced KML/KMZ spatial layers for client GIS",
      "Digital Terrain Models (DTM) and 0.5m contour interval sheets",
      "Volumetric quantity takeoff computations in Excel and CAD"
    ],
    badge: "SPATIAL COMPUTING"
  }
];
