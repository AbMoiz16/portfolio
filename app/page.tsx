import {
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
  Github,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 light:from-slate-50 light:via-blue-50 light:to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 backdrop-blur-md border-b border-slate-700 dark:border-slate-700 light:border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-lg sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
              <span className="text-orange-500">ABDUL MOIZ KHAN</span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-3 sm:px-4 py-2"
                asChild
              >
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white dark:text-white light:text-slate-900 order-2 lg:order-1">
              <p className="text-orange-500 mb-2 sm:mb-4 text-sm sm:text-base">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4 leading-tight">
                ABDUL MOIZ
                <br />
                KHAN
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-orange-500 font-semibold mb-4 sm:mb-6">
                SQA Engineer
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 sm:mb-8 max-w-lg">
                A quality assurance specialist flourishing expertise in manual testing, automation, and comprehensive QA
                strategies
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <a href="#contact">Contact me</a>
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto" asChild>
                  <a href="#portfolio">Portfolio</a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 justify-center sm:justify-start">
                <Link
                  href="https://github.com/AbMoiz16"
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-orange-500 transition-colors"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abdul-moiz-khan16/"
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-orange-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link
                  href="mailto:moiza7197@gmail.com"
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-orange-500 transition-colors"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <Image
                  src="/images/profile.jpg"
                  alt="Abdul Moiz Khan"
                  width={500}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">3+</div>
              <div className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">5+</div>
              <div className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">100%</div>
              <div className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">24/7</div>
              <div className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4 sm:mb-6">
                About Me
              </h2>
              <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 sm:mb-6">
                I'm a passionate Software Quality Assurance Engineer with 3+ years of experience in manual and
                automation testing. I specialize in creating comprehensive test strategies that ensure software
                reliability and performance.
              </p>
              <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 sm:mb-8">
                My expertise spans across Python, Selenium, PyTest, API testing with POSTMAN, and proficiency in
                SDLC/STLC methodologies, Agile frameworks, Jira, and test case development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
                  <span className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Manual Testing
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
                  <span className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Automation Testing
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
                  <span className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                    API Testing
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
                  <span className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Performance Testing
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200">
                <CardContent className="p-4 sm:p-6 text-center">
                  <TestTube className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-semibold text-white dark:text-white light:text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Testing Expertise
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Comprehensive testing strategies
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Code className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-semibold text-white dark:text-white light:text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Python, Selenium, PyTest
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Database className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-semibold text-white dark:text-white light:text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    API Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                    POSTMAN, REST APIs
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-semibold text-white dark:text-white light:text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Agile/SDLC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Jira, Test Case Development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
              My Services
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto">
              Comprehensive QA solutions to ensure your software meets the highest quality standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <TestTube className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-white dark:text-white light:text-slate-900">Manual Testing</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Comprehensive manual testing to identify bugs and ensure functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <li>• Functional Testing</li>
                  <li>• User Acceptance Testing</li>
                  <li>• Regression Testing</li>
                  <li>• Exploratory Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Zap className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-white dark:text-white light:text-slate-900">Test Automation</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Automated testing solutions using Python, Selenium, and PyTest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <li>• Selenium WebDriver</li>
                  <li>• PyTest Framework</li>
                  <li>• CI/CD Integration</li>
                  <li>• Test Script Development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Database className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-white dark:text-white light:text-slate-900">API Testing</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Thorough API testing using POSTMAN and automated tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <li>• REST API Testing</li>
                  <li>• POSTMAN Collections</li>
                  <li>• Response Validation</li>
                  <li>• Performance Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <FileText className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-white dark:text-white light:text-slate-900">Test Documentation</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Comprehensive test case development and documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <li>• Test Case Creation</li>
                  <li>• Test Plans</li>
                  <li>• Bug Reports</li>
                  <li>• QA Metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-white dark:text-white light:text-slate-900">QA Consulting</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Strategic QA consulting and process improvement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <li>• QA Strategy Development</li>
                  <li>• Process Optimization</li>
                  <li>• Team Training</li>
                  <li>• Tool Selection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <Star className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-white dark:text-white light:text-slate-900">Quality Assurance</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  End-to-end quality assurance for your software projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
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

      {/* Portfolio/Projects Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
              Portfolio & Projects
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600">
              Diverse testing experiences across various domains and technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Application Testing */}
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white dark:text-white light:text-slate-900">
                  Mobile Application Testing
                </CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Emotional State Sharing Platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4">
                  Comprehensive testing of a mobile application designed to help users share their moods and understand
                  their partner's current emotional state. Applied various testing techniques to identify and resolve
                  issues, ensuring seamless user experience through rigorous testing to enhance performance,
                  functionality, and reliability.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Mobile Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    User Experience Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Performance Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Functionality Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* ERP System Testing */}
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white dark:text-white light:text-slate-900">ERP System Testing</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Business Operations Management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4">
                  Comprehensive testing of ERP systems that streamline business operations and enhance efficiency.
                  Utilized various testing techniques including automation testing with Python and Selenium to identify
                  and resolve issues, ensuring seamless user experience and contributing to robust, user-friendly
                  enterprise solutions.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Automation Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Selenium
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Regression Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* E-commerce Platform Testing */}
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white dark:text-white light:text-slate-900">
                  E-commerce Platform Testing
                </CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Online Shopping Experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4">
                  Comprehensive testing of e-commerce platforms with focus on functional testing, API testing, and
                  comprehensive manual testing procedures. Ensured smooth shopping experiences, payment processing, and
                  inventory management systems.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Functional Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    API Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Postman
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Productivity Extension Testing */}
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white dark:text-white light:text-slate-900">
                  Productivity Extension Testing
                </CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Task Management Integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4">
                  Testing of productivity extensions for task assignment and management. Comprehensive testing including
                  smoke testing, manual testing, and quality assurance to ensure seamless integration with existing
                  productivity workflows.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Smoke Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Manual Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Integration Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Quality Assurance
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skills Assessment Platform */}
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white dark:text-white light:text-slate-900">
                  Skills Assessment Platform
                </CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Professional Evaluation System
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4">
                  Testing of skills assessment platforms with automated testing implementation using Python and Selenium
                  for comprehensive test coverage. Ensured accurate skill evaluation, secure testing environments, and
                  reliable assessment results.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Selenium Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Test Automation
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Security Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* API Testing Projects */}
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-white dark:text-white light:text-slate-900">API Testing Expertise</CardTitle>
                <CardDescription className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  Backend Service Validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4">
                  Extensive experience in API testing across various projects, utilizing POSTMAN and automated tools to
                  ensure robust backend services. Focused on response validation, performance testing, and comprehensive
                  endpoint coverage.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    REST API Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    POSTMAN Collections
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Response Validation
                  </Badge>
                  <Badge variant="outline" className="text-xs border-orange-500 text-orange-500">
                    Performance Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
              Technologies & Tools
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600">
              The tools and technologies I use to deliver exceptional QA solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Technologies Grid */}
            {[
              { name: "Python", icon: Code },
              { name: "Selenium", icon: Zap },
              { name: "POSTMAN", icon: Database },
              { name: "JIRA", icon: Users },
              { name: "PyTest", icon: TestTube },
              { name: "Git", icon: Code },
              { name: "Agile", icon: Users },
              { name: "Scrum", icon: Star },
            ].map((tech, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-slate-800 dark:bg-slate-800 light:bg-white rounded-lg p-4 mb-2 transition-all duration-300 group-hover:bg-orange-500/20 group-hover:scale-105 border border-slate-700 dark:border-slate-700 light:border-slate-200 group-hover:border-orange-500">
                  <tech.icon className="h-8 w-8 text-slate-400 dark:text-slate-400 light:text-slate-600 mx-auto group-hover:text-orange-500 transition-colors duration-300" />
                </div>
                <div className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-orange-500 transition-colors duration-300">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600">
              Ready to ensure your software meets the highest quality standards?
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white dark:text-white light:text-slate-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">moiza7197@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">+92 (337) 0434823</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                    Available for Remote Work
                  </span>
                </div>
              </div>
              <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white rounded-lg p-6 mb-8 border border-slate-700 dark:border-slate-700 light:border-slate-200">
                <h4 className="font-semibold text-white dark:text-white light:text-slate-900 mb-4">Why Choose Me?</h4>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    3+ years of proven QA expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    24/7 support and communication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Agile methodology experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Comprehensive testing strategies
                  </li>
                </ul>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  asChild
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                >
                  <Link href="https://www.linkedin.com/in/abdul-moiz-khan16/">LinkedIn</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                >
                  <Link href="https://github.com/AbMoiz16">GitHub</Link>
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-900 light:bg-white text-white dark:text-white light:text-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700 dark:border-slate-700 light:border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="pt-8">
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600">
              © 2025 Abdul Moiz Khan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
