import { motion } from 'framer-motion';
import { 
  FiBarChart2, 
  FiPieChart, 
  FiTrendingUp, 
  FiDatabase, 
  FiCode, 
  FiMonitor,
  FiCheck,
  FiActivity
} from 'react-icons/fi';
import { 
  SiPython, 
  SiMicrosoft,
  SiExcel
} from 'react-icons/si';
import { 
  BsGraphUp, 
  BsTable, 
  BsFileEarmarkSpreadsheet,
  BsBarChartFill,
  BsPieChartFill,
  BsDiagram3Fill
} from 'react-icons/bs';

const projects = [
  {
    title: "Sales Data Analytics Project",
    subtitle: "Multi-Tool Business Intelligence Dashboard",
    description: "Comprehensive sales data analysis using Python, Tableau, and Power BI to extract actionable business insights from superstore sales data.",
    tools: [
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "Pandas", icon: BsFileEarmarkSpreadsheet, color: "text-blue-400" },
      { name: "Matplotlib", icon: BsGraphUp, color: "text-green-400" },
      { name: "Seaborn", icon: FiBarChart2, color: "text-purple-400" },
      { name: "Tableau", icon: BsBarChartFill, color: "text-blue-500" },
      //{ name: "Power BI", icon: BsDashboard, color: "text-yellow-500" },
      //{ name: "Excel", icon: SiExcel, color: "text-green-500" }
    ],
    features: [
      "Exploratory Data Analysis (EDA) with Python",
      "Statistical visualizations using Matplotlib & Seaborn",
      "Interactive Tableau dashboard with KPIs",
      "Power BI business intelligence dashboard",
      "Monthly sales trend analysis",
      "Regional & category-wise performance metrics",
      "Profit vs Sales correlation analysis",
      "Customer behavior insights"
    ],
    visualizations: [
      { name: "Monthly Sales Trend", type: "Line Chart", tool: "Matplotlib" },
      { name: "Sales Distribution", type: "Histogram", tool: "Matplotlib" },
      { name: "Sales by Region", type: "Bar Chart", tool: "Matplotlib/Seaborn" },
      { name: "Profit vs Sales", type: "Scatter Plot", tool: "Matplotlib" },
      { name: "Category Performance", type: "Bar/Swarm Plot", tool: "Seaborn" },
      { name: "Regional Profit Analysis", type: "Violin/Box Plot", tool: "Seaborn" },
      { name: "Interactive Dashboard", type: "KPI Cards & Charts", tool: "Tableau" },
      { name: "Business Metrics", type: "Donut & Bar Charts", tool: "Power BI" }
    ],
    insights: [
      "West region contributes ~40% of total profit",
      "Electronics category generates highest sales",
      "Positive correlation between sales and profit",
      "Most orders are medium-value (₹1200-₹2000)",
      "Sales peak in January and November",
      "Top customers: Rohit and Aarav"
    ],
    datasets: [
      "Superstore Sales Data (Python Analysis)",
      "Sales Dashboard Data (Tableau & Power BI)"
    ],
    color: "from-blue-600 to-purple-600"
  },
  {
    title: "Parry Agro Industries Study",
    subtitle: "Business Analysis & Strategic Evaluation",
    description: "Comprehensive study on Parry Agro Industries Ltd - one of India's leading producers of CTC, Organic, and Green teas.",
    tools: [
      //{ name: "Excel", icon: SiExcel, color: "text-green-500" },
      { name: "Power BI", icon: BsDiagram3Fill, color: "text-yellow-500" },
      { name: "Research", icon: FiDatabase, color: "text-blue-400" },
      { name: "Analysis", icon: FiActivity, color: "text-purple-400" }
    ],
    features: [
      "30 Days Internship at Iyerpadi Factory (10/07/2024 - 10/08/2024)",
      "Financial reports & statements preparation",
      "Bank statements & petty cash reconciliation",
      "Production field operations support",
      "Tea estate industry financial operations learning"
    ],
    visualizations: [
      { name: "Vision & Mission Analysis", type: "Strategic Framework", tool: "Research" },
      { name: "SWOT Analysis", type: "Strategic Matrix", tool: "Analysis" },
      { name: "Economic Factors", type: "Market Evaluation", tool: "Research" },
      { name: "Trade Factors", type: "Industry Analysis", tool: "Analysis" }
    ],
    insights: [
      "Quality Leadership focus identified",
      "Sustainability initiatives evaluated",
      "Innovation & Growth opportunities mapped",
      "Strengths, Weaknesses, Opportunities analyzed",
      "Economic & trade factors assessed for growth"
    ],
    datasets: [
      "Parry Agro Industries Internal Data",
      "Tea Estate Industry Reports"
    ],
    color: "from-green-600 to-teal-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4 gradient-text"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Real-world data analytics and business projects demonstrating technical skills and insights
        </motion.p>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-20"
          >
            {/* Project Header */}
            <div className={`bg-gradient-to-r ${project.color} rounded-2xl p-8 mb-8`}>
              <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/90 text-lg">{project.subtitle}</p>
              <p className="text-white/80 mt-4">{project.description}</p>
            </div>

            {/* Tools Used */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiCode className="text-accent" /> Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <tool.icon className={`text-2xl ${tool.color}`} />
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Features */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FiDatabase className="text-primary" /> Project Features
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visualizations */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FiPieChart className="text-accent" /> Visualizations Created
                </h4>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {project.visualizations.map((viz, i) => (
                    <div key={i} className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-white">{viz.name}</p>
                          <p className="text-sm text-gray-400">{viz.type}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                          {viz.tool}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiTrendingUp className="text-green-400" /> Key Business Insights
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {project.insights.map((insight, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg">
                    <span className="text-green-400 text-xl">📊</span>
                    <span className="text-gray-300">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Datasets */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiMonitor className="text-purple-400" /> Datasets Analyzed
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.datasets.map((dataset, i) => (
                  <span key={i} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg">
                    {dataset}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}