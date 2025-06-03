import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  FileText,
  Mail,
  MapPin,
  Phone,
  Star,
  TestTube,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">AMK</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#experience"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#portfolio"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild>
                <a href="#contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/images/profile.jpg"
                alt="Abdul Moiz Khan"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Abdul Moiz Khan</h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Senior SQA Engineer & Test Automation Specialist
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Delivering quality assurance solutions with 3+ years of expertise in manual testing, automation testing,
              and comprehensive QA strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">3+</div>
              <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">25+</div>
              <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">100%</div>
              <div className="text-slate-600 dark:text-slate-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">24/7</div>
              <div className="text-slate-600 dark:text-slate-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm a passionate Software Quality Assurance Engineer with 3+ years of experience in manual and
                automation testing. I specialize in creating comprehensive test strategies that ensure software
                reliability and performance.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                My expertise spans across Python, Selenium, PyTest, API testing with POSTMAN, and proficiency in
                SDLC/STLC methodologies, Agile frameworks, Jira, and test case development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-slate-600 dark:text-slate-300">Manual Testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-slate-600 dark:text-slate-300">Automation Testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-slate-600 dark:text-slate-300">API Testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-slate-600 dark:text-slate-300">Performance Testing</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6 text-center">
                  <TestTube className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Testing Expertise</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Comprehensive testing strategies</p>
                </CardContent>
              </Card>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automation</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Python, Selenium, PyTest</p>
                </CardContent>
              </Card>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">API Testing</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">POSTMAN, REST APIs</p>
                </CardContent>
              </Card>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Agile/SDLC</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Jira, Test Case Development</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">My Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive QA solutions to ensure your software meets the highest quality standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <TestTube className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                <CardTitle className="dark:text-white">Manual Testing</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Comprehensive manual testing to identify bugs and ensure functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Functional Testing</li>
                  <li>• User Acceptance Testing</li>
                  <li>• Regression Testing</li>
                  <li>• Exploratory Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <Zap className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
                <CardTitle className="dark:text-white">Test Automation</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Automated testing solutions using Python, Selenium, and PyTest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Selenium WebDriver</li>
                  <li>• PyTest Framework</li>
                  <li>• CI/CD Integration</li>
                  <li>• Test Script Development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <Database className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
                <CardTitle className="dark:text-white">API Testing</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Thorough API testing using POSTMAN and automated tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• REST API Testing</li>
                  <li>• POSTMAN Collections</li>
                  <li>• Response Validation</li>
                  <li>• Performance Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <FileText className="h-10 w-10 text-orange-600 dark:text-orange-400 mb-4" />
                <CardTitle className="dark:text-white">Test Documentation</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Comprehensive test case development and documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Test Case Creation</li>
                  <li>• Test Plans</li>
                  <li>• Bug Reports</li>
                  <li>• QA Metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <Users className="h-10 w-10 text-red-600 dark:text-red-400 mb-4" />
                <CardTitle className="dark:text-white">QA Consulting</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Strategic QA consulting and process improvement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• QA Strategy Development</li>
                  <li>• Process Optimization</li>
                  <li>• Team Training</li>
                  <li>• Tool Selection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <Star className="h-10 w-10 text-yellow-600 dark:text-yellow-400 mb-4" />
                <CardTitle className="dark:text-white">Quality Assurance</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  End-to-end quality assurance for your software projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• SDLC/STLC Implementation</li>
                  <li>• Agile Testing</li>
                  <li>• Risk Assessment</li>
                  <li>• Quality Metrics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              My journey in software quality assurance and testing
            </p>
          </div>
          <div className="space-y-8">
            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Senior Software QA Engineer
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">Cloudpacer</p>
                  </div>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    Feb 2025 - Present
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Leading quality assurance initiatives with focus on Python programming and comprehensive software
                  quality methodologies. Ensuring system reliability and performance through advanced testing
                  strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Software Quality
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Test Automation
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Quality Assurance
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">SQA Engineer</h3>
                    <p className="text-slate-600 dark:text-slate-300">Magnatec Systems Private Limited</p>
                  </div>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    Oct 2023 - Jan 2025
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Conducted extensive regression and smoke testing on SMACC 6 and SMACC 7, ensuring system stability and
                  reliability post-updates. Developed and executed automated test scripts using Python, Selenium, and
                  PyTest, enhancing testing efficiency and feature accuracy. Designed detailed test scenarios and cases
                  to evaluate functionality and performance, identifying critical defects and optimizing user
                  experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Selenium
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    PyTest
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Test Cases
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Regression Testing
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Smoke Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Associate Software Quality Assurance Engineer
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">PureLogics</p>
                  </div>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    Apr 2022 - Sep 2023
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Conducted API Testing on the Veroskill project utilizing the Postman tool, identifying critical bugs
                  to enhance user experience. Developed and executed automated test scripts using Python and Selenium on
                  the Gift Recommendation Project, identifying and resolving critical issues, resulting in a reduction
                  in bugs and a seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Software Quality
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Selenium
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    API Testing
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    POSTMAN
                  </Badge>
                  <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                    Test Automation
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Portfolio & Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Key projects I've worked on throughout my QA career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MoodMe Project */}
            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="dark:text-white">MoodMe</CardTitle>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    Feb 2025 - Present
                  </Badge>
                </div>
                <CardDescription className="dark:text-slate-300">Mobile Application Testing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  MoodMe is a mobile application designed to help users share their moods and understand their partner's
                  current emotional state. Applied various testing techniques to identify and resolve issues, ensuring
                  seamless user experience through rigorous testing to enhance performance, functionality, and
                  reliability.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Mobile Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    User Experience Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Performance Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Functionality Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Quality Assurance
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* SMACC 7 Project */}
            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="dark:text-white">SMACC 7</CardTitle>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    Jun 2024 - Jan 2025
                  </Badge>
                </div>
                <CardDescription className="dark:text-slate-300">
                  Associated with Magnatec Systems Private Limited
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  SMACC7 is a comprehensive ERP system that streamlines business operations and enhances efficiency.
                  Utilized various testing techniques to identify and resolve issues, ensuring a seamless user
                  experience. By conducting rigorous testing, helped improve system performance, functionality, and
                  reliability, ultimately contributing to a more robust and user-friendly ERP solution.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Automation Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Selenium
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    PyTest
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Jira
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Regression Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Test Automation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* SMACC 6 Project */}
            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="dark:text-white">SMACC 6</CardTitle>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    Oct 2023 - Jan 2025
                  </Badge>
                </div>
                <CardDescription className="dark:text-slate-300">
                  Associated with Magnatec Systems Private Limited
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  SMACC6 is a comprehensive ERP system designed to streamline business operations. Employed various
                  testing techniques to identify and resolve issues, ensuring a seamless user experience. By conducting
                  thorough testing, helped enhance system performance, reliability, and usability, ultimately improving
                  overall efficiency for end users.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Functional Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Jira
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Regression Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Test Cases
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Bug Tracking
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Smoke Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cavetown Project */}
            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="dark:text-white">Cavetown</CardTitle>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    May 2023 - Oct 2023
                  </Badge>
                </div>
                <CardDescription className="dark:text-slate-300">Associated with PureLogics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  E-commerce platform testing with focus on functional testing, API testing, and comprehensive manual
                  testing procedures.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Functional Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    API Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Regression Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Jira
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Postman
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Handover Project */}
            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="dark:text-white">Handover</CardTitle>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    Jun 2023 - Oct 2023
                  </Badge>
                </div>
                <CardDescription className="dark:text-slate-300">Associated with PureLogics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Outlook extension for task assignment. Comprehensive testing including smoke testing, manual testing,
                  and quality assurance.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Smoke Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Sanity Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Regression Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Jira
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Software Quality
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* VeroSkill Project */}
            <Card className="hover:shadow-lg dark:hover:shadow-slate-700/25 transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="dark:text-white">VeroSkill</CardTitle>
                  <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-200">
                    2022 - 2023
                  </Badge>
                </div>
                <CardDescription className="dark:text-slate-300">Associated with PureLogics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Skills assessment platform with automated testing implementation using Python and Selenium for
                  comprehensive test coverage.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Selenium Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Regression Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Jira
                  </Badge>
                  <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-300">
                    Test Automation
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technologies & Tools</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              The tools and technologies I use to deliver exceptional QA solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* First Row - 4 Technologies */}
            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:scale-105">
                <Code className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                Python
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 group-hover:scale-105">
                <Zap className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                Selenium
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 group-hover:scale-105">
                <Database className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                POSTMAN
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:scale-105">
                <Users className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                JIRA
              </div>
            </div>

            {/* Second Row - 4 Technologies */}
            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 group-hover:scale-105">
                <FileText className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                Trello
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 group-hover:scale-105">
                <Code className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                Git
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 group-hover:scale-105">
                <Users className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                Agile
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:scale-105">
                <Star className="h-8 w-8 text-slate-600 dark:text-slate-300 mx-auto group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Scrum
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Ready to ensure your software meets the highest quality standards?
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">moiza7197@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-slate-400 dark:text-slate-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">+92 (337) 0434823</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-slate-400 dark:text-slate-500 mr-3" />
                  <span className="text-slate-600 dark:text-slate-300">Available for Remote Work</span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Why Choose Me?</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    3+ years of proven QA expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 support and communication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Agile methodology experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Comprehensive testing strategies
                  </li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  asChild
                  className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300"
                >
                  <Link href="https://www.linkedin.com/in/abdul-moiz-khan16/">LinkedIn</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white hover:border-gray-900 dark:hover:border-gray-700 transition-colors duration-300"
                >
                  <Link href="https://github.com/AbMoiz16">GitHub</Link>
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="border-t border-slate-800 dark:border-slate-700 pt-8">
            <p className="text-slate-400 dark:text-slate-500">© 2025 Abdul Moiz Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
