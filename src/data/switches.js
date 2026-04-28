const switches = [
  {
    id: 1,
    name: "Gazzew Boba U4T (62g)",
    company: "Gazzew",
    type: "Tactile",
    actuationForce: "42gf",
    category: "Best Tactile",
    description: "A highly regarded tactile switch with a pronounced rounded bump and a deep, thocky sound.",
    videoLink: "https://www.youtube.com/watch?v=_yYayF7oWZI",
    image: "gazzewboba.webp"
  },
  {
    id: 2,
    name: "Akko V3 Cream Blue Pro",
    company: "Akko",
    type: "Tactile",
    actuationForce: "39gf",
    category: "Best Budget Tactile",
    description: "A budget tactile switch with a dustproof stem cover and factory pre-lubing for a smoother feel.",
    videoLink: "https://www.youtube.com/watch?v=a0-seEt1fUA",
    image: "akkov3creamyblue.jpg"

  },
  {
    id: 3,
    name: "Gateron Ink Black V2",
    company: "Gateron",
    type: "Linear",
    actuationForce: "54gf",
    category: "Best Linear",
    description: "A smooth premium linear switch with a deep sound profile and a fluid keypress feel.",
    videoLink: "https://www.youtube.com/watch?v=1mn7HRFBr5g",
    image: "gateroninkv2.webp"
  },
  {
    id: 4,
    name: "Gateron G Pro Yellow",
    company: "Gateron",
    type: "Linear",
    actuationForce: "46gf",
    category: "Best Budget Linear",
    description: "A budget-friendly linear switch with light actuation, smooth travel, and factory lubrication.",
    videoLink: "https://www.youtube.com/watch?v=CNCF1B3V48c",
    image: "gaterongpro.webp"

  },
  {
    id: 5,
    name: "Gateron Melodic",
    company: "Gateron",
    type: "Clicky",
    actuationForce: "39gf",
    category: "Best Clicky",
    description: "A clicky switch with a light, clear click and a smoother feel than many traditional clickies.",
    videoLink: "https://www.youtube.com/watch?v=0UWGa_HDzz0",
    image: "gateronmelodic.avif"
  },
  {
    id: 6,
    name: "Kailh Box White V2",
    company: "Kailh",
    type: "Clicky",
    actuationForce: "50gf",
    category: "Best Budget Clicky",
    description: "A lighter clicky switch with crisp actuation, solid tactile feedback, and a stable box stem design.",
    videoLink: "https://www.youtube.com/watch?v=fw8fFPBXFgU",
    image: "kailhboxwhitev2.jpg"
  },
  {
    id: 7,
    name: "Cherry MX Speed Silver",
    company: "Cherry",
    type: "Linear",
    actuationForce: "45gf",
    category: "Best Gaming",
    description: "A fast and lightweight switch with very short pre-travel, making it well suited for gaming.",
    image: "cherrymxspeedsilver.avif"
  },
  {
    id: 8,
    name: "TTC Frozen Silent V2",
    company: "TTC",
    type: "Linear",
    actuationForce: "38gf",
    category: "Best Silent Linear",
    description: "A quiet linear switch with dampened sound, light feel, and clean RGB-friendly housing.",
    videoLink: "https://www.youtube.com/watch?v=uBbzqunNFsI",
    image: "ttcfrozensilentv2.webp"
  },
  {
    id: 9,
    name: "Durock T1 Silent Shrimp",
    company: "Durock",
    type: "Tactile",
    actuationForce: "41gf",
    category: "Best Silent Tactile",
    description: "A quiet tactile switch that preserves a distinct bump while keeping typing noise very low.",
    videoLink: "https://www.youtube.com/watch?v=K-0JRAbvwmc",
    image: "durocksilentshrimp.jpg"
  },
  {
  id: 10,
  name: "HMX Black Cat Tactile",
  company: "HMX",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch with a noticeable bump that gives feedback during typing.",
  videoLink: "https://www.youtube.com/watch?v=qU9n3Pz07lI",
  image: "hmxblackcat.jpg"
},
{
  id: 11,
  name: "Kailh Calligraphy Linear",
  company: "Kailh",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch with a smooth keypress and no tactile bump.",
  videoLink: "https://www.youtube.com/watch?v=F99o3QLVw3g",
  image: "kailhcalligraphy.jpg"
},
{
  id: 12,
  name: "BSUN Golden Apple Tactile",
  company: "BSUN",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch that provides a noticeable bump for more typing feedback.",
  videoLink: "https://www.youtube.com/watch?v=PxtxM8kqRi4",
  image: "bsungoldenapple.webp"
},
{
  id: 13,
  name: "HMX Snowfall Tactile",
  company: "HMX",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch with feedback during actuation for a more pronounced typing feel.",
  videoLink: "https://www.youtube.com/watch?v=b4NZwgmrspI",
  image: "HMXsnowfall.webp"
},
{
  id: 14,
  name: "HMX Cola Linear",
  company: "HMX",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch designed for a smooth and uninterrupted keypress.",
  videoLink: "https://www.youtube.com/watch?v=4Pk9NlJGoJA",
  image: "HMXcolalinear.webp"
},
{
  id: 15,
  name: "Keygeek Butterfly Linear",
  company: "Keygeek",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch with a consistent feel and no tactile bump.",
  videoLink: "https://www.youtube.com/watch?v=Fx812E-yb58",
  image: "Keygeekbutterfly.webp"

},
{
  id: 16,
  name: "HMX Retro J Tactile",
  company: "HMX",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch that emphasizes feedback through a noticeable bump.",
  videoLink: "https://www.youtube.com/watch?v=h5rMIJOlcCI",
  image: "hmxretroj.jpg"
},
{
  id: 17,
  name: "WEKT Lucy V5 Silent Linear",
  company: "WEKT",
  type: "Silent Linear",
  actuationForce: "Unknown",
  category: "Silent Linear",
  description: "A quieter linear switch designed to reduce typing noise while keeping a smooth feel.",
  image: "wektlucyv5linear.webp"
},
{
  id: 18,
  name: "Wuque WS BigLucky Linear",
  company: "Wuque",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch with a smooth travel and no tactile interruption.",
  videoLink: "https://www.youtube.com/watch?v=oBQXX8DB6gc",
  image: "wuquewsbigluckylinear.webp"
},
{
  id: 19,
  name: "Wuque WS BigLucky Tactile",
  company: "Wuque",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch with a bump that gives clearer feedback while typing.",
  videoLink: "https://www.youtube.com/watch?v=CyYAo6vpm4M",
  image: "wuque-ws-biglucky-tactile.webp"
},
{
  id: 20,
  name: "Wuque WS BigLucky Clicky",
  company: "Wuque",
  type: "Clicky",
  actuationForce: "Unknown",
  category: "Clicky",
  description: "A clicky switch that combines tactile feedback with an audible click.",
  image: "wuque-ws-biglucky-clicky-switches.webp"
},
{
  id: 21,
  name: "Thocc Exchange Unity Silent Tactile",
  company: "Thocc Exchange",
  type: "Silent Tactile",
  actuationForce: "Unknown",
  category: "Silent Tactile",
  description: "A quieter tactile switch that keeps feedback while lowering typing noise.",
  image: "thocc-exchange-unity-silent-tactile.webp"
},
{
  id: 22,
  name: "Gateron Khonsu Linear",
  company: "Gateron",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch with a smooth press and no tactile bump.",
  videoLink: "https://www.youtube.com/watch?v=cpuH11Sk6uE",
  image: "gateronkhonsu.jpg"
},
{
  id: 23,
  name: "Gateron Azure Dragon V4 Tactile",
  company: "Gateron",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch intended to provide a noticeable bump during keypresses.",
  videoLink: "https://www.youtube.com/watch?v=qITsK1zidGk",
  image: "gateron-azure-dragon-v4-tactile.webp"
},
{
  id: 24,
  name: "Lichicx Yamatake Silent Light Tactile",
  company: "Lichicx",
  type: "Silent Tactile",
  actuationForce: "Unknown",
  category: "Silent Tactile",
  description: "A quieter tactile switch with lighter feedback and reduced typing noise.",
  image: "lichicx-yamatake-silent-light.webp"
},
{
  id: 25,
  name: "Lichicx Yogurt Silent Linear",
  company: "Lichicx",
  type: "Silent Linear",
  actuationForce: "Unknown",
  category: "Silent Linear",
  description: "A silent linear switch designed for smooth presses with less sound.",
  videoLink: "https://www.youtube.com/watch?v=2LYLzuEVuog",
  image: "lichicxyogurt.jpg"
},
{
  id: 26,
  name: "HMX Lanikai Linear",
  company: "HMX",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch with a smooth and consistent keypress feel.",
  videoLink: "https://www.youtube.com/watch?v=7mBf47DTBso",
  image: "hmx-lanikai-linear-switches.webp"
},
{
  id: 27,
  name: "Gateron Milky Yellow HE",
  company: "Gateron",
  type: "Hall Effect",
  actuationForce: "Unknown",
  category: "Hall Effect",
  description: "A Hall Effect switch that uses magnetic sensing instead of traditional metal contact.",
  videoLink: "https://www.youtube.com/watch?v=A1XFaWy4El4",
  image: "gateronmilkyyellowhe.jpg"
},
{
  id: 28,
  name: "Keygeek Y2 Linear",
  company: "Keygeek",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch with a smooth and uninterrupted travel.",
  videoLink: "https://www.youtube.com/watch?v=MCeskXzIRZM",
  image: "keygeek-y2-linear-switches.webp"
},
{
  id: 29,
  name: "HMX Crisp Linear",
  company: "HMX",
  type: "Linear",
  actuationForce: "Unknown",
  category: "Linear",
  description: "A linear switch intended to provide a clean and smooth keypress.",
  videoLink: "https://www.youtube.com/watch?v=W1qEOwe72MY",
  image: "hmxcrisplinear.jpg"
},
{
  id: 30,
  name: "Gateron x Siliworks Type R Tactile",
  company: "Gateron x Siliworks",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch that offers feedback through a noticeable bump during actuation.",
  videoLink: "https://www.youtube.com/watch?v=UJNwXN3-pZc",
  image: "gateron-x-siliworks-type-r.webp"
},
{
  id: 31,
  name: "HMX Firecracker Tactile",
  company: "HMX",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch with a pronounced bump for more feedback while typing.",
  videoLink: "https://www.youtube.com/watch?v=H5NrpZikqVQ",
  image: "HMXFirecracker.webp"
},
{
  id: 32,
  name: "WEKT Nafu Silent Linear",
  company: "WEKT",
  type: "Silent Linear",
  actuationForce: "Unknown",
  category: "Silent Linear",
  description: "A quieter linear switch made to reduce typing noise while keeping a smooth press.",
  videoLink: "https://www.youtube.com/watch?v=Gl4exN4dBQ4",
  image: "wekt-nafu-silent-linear-switches.webp"
},
{
  id: 33,
  name: "Wingtree Qingyan Tactile",
  company: "Wingtree",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch with a bump that adds feedback and control during typing.",
  videoLink: "https://www.youtube.com/watch?v=QGmnKhP-M-Y",
  image: "wingtreeqingyantactile.jpg"
},
{
  id: 34,
  name: "Wingtree BM-11 Tactile",
  company: "Wingtree",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch designed to provide noticeable feedback during each keypress.",
  videoLink: "https://www.youtube.com/watch?v=_tgzYrk-pco",
  image: "wingtree-bm-11-tactile-switches.webp"
},
{
  id: 35,
  name: "BSUN Mozzarella Cheese Tactile",
  company: "BSUN",
  type: "Tactile",
  actuationForce: "Unknown",
  category: "Tactile",
  description: "A tactile switch with a feedback bump that helps make typing feel more distinct.",
  videoLink: "https://www.youtube.com/watch?v=hmrCuadkmRg",
  image: "bsun-mozzarella-cheese-tactile-switches.webp"
},
{
  id: 36,
  name: "Gateron Harmonic Clicky",
  company: "Gateron",
  type: "Clicky",
  actuationForce: "Unknown",
  category: "Clicky",
  description: "A clicky switch that combines tactile feedback with an audible click sound.",
  videoLink: "https://www.youtube.com/shorts/Kx8_8PypNfE",
  image: "gateronharmonic.jpg"
},
{
  id: 37,
  name: "Gateron Magnetic Jade Delta HE",
  company: "Gateron",
  type: "Hall Effect",
  actuationForce: "Unknown",
  category: "Hall Effect",
  description: "A Hall Effect switch that uses magnetic sensing and supports a different style of actuation from traditional mechanical switches.",
  videoLink: "https://www.youtube.com/shorts/Vr_jq0Xe1YU",
  image: "gateron-magnetic-jade-delta-he.webp"
},
{
  id: 38,
  name: "Gateron Magnetic Jade Ultra HE",
  company: "Gateron",
  type: "Hall Effect",
  actuationForce: "Unknown",
  category: "Hall Effect",
  description: "A Hall Effect switch that relies on magnetic sensing rather than standard contact-based actuation.",
  videoLink: "https://www.youtube.com/watch?v=MBpsMLv8L1U",
  image: "gateron-magnetic-jade-ultra-he.webp"

} 
]

export default switches