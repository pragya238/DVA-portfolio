const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "HealthOps Analytics",
    description: "A comprehensive healthcare operations analytics dashboard built with Tableau, analyzing hospital KPIs, patient flow, department performance, and readmission rates to drive data-informed healthcare decisions.",
    image: `${base}healthops_analytics.png`,
    tags: ["Tableau", "Healthcare", "Data Analytics"],
    github: "https://github.com/pragya238/SectionB_G11_HealthOps_Analytics",
    live: "https://public.tableau.com/app/profile/pragya.kashyap7848/viz/HospitalAnalysis_17774535485210/ExecutiveOverview"
  },
  {
    name: "Women Violence Dashboard",
    description: "An interactive Tableau dashboard visualizing women violence statistics across India, featuring geographical maps, trend analysis, crime-type breakdowns, and demographic insights to raise awareness through data.",
    image: `${base}women_violence_dashboard.png`,
    tags: ["Tableau", "Social Analytics", "Data Visualization"],
    github: "https://github.com/pragya238/women-vio-dashboard",
    live: "https://public.tableau.com/app/profile/pragya.kashyap7848/viz/WomenViolenceDashboard_17774549710580/Dashboard1?publish=yes"
  },
  {
    name: "Vintage Car Dashboard",
    description: "A visually rich Tableau dashboard analyzing vintage car sales data, featuring sales trends, model comparisons, regional performance, and pricing analytics with an elegant warm-toned design.",
    image: `${base}vintage_car_dashboard.png`,
    tags: ["Tableau", "Data Analytics", "Dashboarding"],
    github: "https://github.com/pragya238/vintage-car-Dashboard",
    live: "https://public.tableau.com/app/profile/pragya.kashyap7848/viz/VintageCarDashboard/Dashboard4"
  },
]

export default projects
