/**
 * Umer Surveying™ — 10 Verified Services
 * Rewritten in technical, active voice per Section 5 guidelines.
 * No marketing filler ("unlock", "seamless", "elevate", "cutting-edge").
 */

export const servicesData = [
  {
    id: "topographic-surveying",
    symbol: "⟁", // Geodetic triangulation station
    label: "Topographic Surveying",
    code: "SVC-01/TOPO",
    description: "We map terrain with total stations and GPS, then bring it into GIS for terrain analysis you can act on.",
    scope: "Elevation contours, spot levels, structural footprints, breaklines, and DTM generation.",
    image: "/images/topographic-surveying.webp",
    alt: "Topographic survey total station measurement"
  },
  {
    id: "property-valuation",
    symbol: "⚖", // Legal balance / appraisal
    label: "Property Valuation",
    code: "SVC-02/VAL",
    description: "We determine property value using land measurements and verified local market data. You receive an accurate appraisal for asset transactions, collateral, and development.",
    scope: "Market value estimation, commercial appraisal, asset verification, and revenue assessment.",
    image: "/images/property-valuation.webp",
    alt: "Property valuation and boundary assessment"
  },
  {
    id: "real-estate-consultancy",
    symbol: "⌖", // Cadastral target
    label: "Real Estate Consultancy",
    code: "SVC-03/REC",
    description: "We assess a property's value and market position so you can make the investment call with real numbers behind it.",
    scope: "Site viability studies, zoning compliance, layout optimization, and risk evaluation.",
    image: "/images/real-estate-consultancy.webp",
    alt: "Real estate land consultancy and site analysis"
  },
  {
    id: "quantity-estimation",
    symbol: "◫", // Takeoff grid
    label: "Quantity Estimation",
    code: "SVC-04/QTY",
    description: "We calculate exact earthwork and material takeoffs directly from field measurements. Your team plans procurement and construction timelines without guesswork.",
    scope: "Cut-and-fill volumes, material takeoffs, road cross-section schedules, and bill of quantities.",
    image: "/images/quantity-estimation.webp",
    alt: "Civil quantity estimation and earthwork takeoffs"
  },
  {
    id: "cost-estimation",
    symbol: "⌗", // Computational ledger
    label: "Cost Estimation",
    code: "SVC-05/CST",
    description: "We produce construction budgets and line-item schedules grounded in measured quantities. You get reliable forecasts for project financing and contractor billing.",
    scope: "Capital expenditure projections, rate analysis, contractor bid verification, and progress billing audits.",
    image: "/images/cost-estimation.webp",
    alt: "Construction cost estimation and budgeting"
  },
  {
    id: "land-dispute-resolution",
    symbol: "⊕", // Boundary pin
    label: "Land Dispute Resolution",
    code: "SVC-06/DISP",
    description: "We re-establish documented boundary lines from revenue records and total station surveys. We produce courtroom-ready cadastral plats to settle boundary claims.",
    scope: "Aks Shajra correlation, title boundary demarcation, encroachment identification, and expert testimony plats.",
    image: "/images/land-dispute-resolution.webp",
    alt: "Cadastral boundary demarcation for dispute resolution"
  },
  {
    id: "kml-kmz-formatting",
    symbol: "◈", // Geospatial polygon
    label: "KML/KMZ Map Formatting",
    code: "SVC-07/KML",
    description: "We convert field coordinates and CAD drawings into georeferenced KML and KMZ layers. You inspect site boundaries and survey points directly in Google Earth.",
    scope: "WGS84 coordinate reprojection, layered spatial vector formatting, attribute tables, and drone overlay integration.",
    image: "/images/kmlkmz-formatting.webp",
    alt: "KML and KMZ geospatial vector formatting"
  },
  {
    id: "agricultural-land-measurement",
    symbol: "⧈", // Acreage parcel
    label: "Agricultural Land Measurement",
    code: "SVC-08/AGRI",
    description: "We survey agricultural acreage, irrigation channels, and field divisions. You receive verified boundary demarcations and acreage certificates for tenancy or sale.",
    scope: "Murabba boundary staking, watercourse slope measurement, parcel sub-division, and arable land calculation.",
    image: "/images/agriculture-land-measurements.webp",
    alt: "Agricultural land measurement and acreage survey"
  },
  {
    id: "three-d-contouring",
    symbol: "⌇", // Contour elevation curve
    label: "3D Contouring",
    code: "SVC-09/3DC",
    description: "We generate digital elevation models and contour maps from spot elevation grids. Engineers use our slope data for drainage design, grading, and site cuts.",
    scope: "Index and intermediate contour intervals, 3D surface tin meshing, slope analysis, and drainage runoff models.",
    image: "/images/contouring-1.webp",
    alt: "3D elevation contour mapping and terrain modeling"
  },
  {
    id: "residential-land-measurement",
    symbol: "⊞", // Lot layout
    label: "Residential Land Measurement",
    code: "SVC-10/RES",
    description: "We establish residential plot perimeters, corner pins, and setback distances. Builders and buyers get exact dimensions before breaking ground.",
    scope: "Corner pin demarcation, road setback verification, layout staking, and municipal building permit plats.",
    image: "/images/residential-land-measurements.webp",
    alt: "Residential plot boundary measurement"
  }
];
