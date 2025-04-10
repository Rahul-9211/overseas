'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  BriefcaseIcon, 
  GlobeAltIcon, 
  DocumentCheckIcon, 
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import ConsultationForm from './ConsultationForm';

const services = [
  {
    title: 'Job Search Program',
    description: `The job search process involves identifying your career goals, researching companies and roles, preparing your resume and cover letter, applying for jobs, networking, and preparing for interviews, ultimately leading to landing a job offer.

COUNTRIES WE OFFER FOR JOB SEARCH PROGRAM:

GERMANY
CROATIA
IRELAND 
CANADA
AUSTRALIA
SINGAPORE 
NEITHERLAND
JAPAN
SPAIN
FINLAND
NORWAY
SOUTH KOREA
DENMARK
SWITZERLAND
UAE
SERBIA
`,
    icon: BriefcaseIcon,
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Tourist Visas',
    description: `What is Tourist Visa?

Tourist/Travel visas allow the bearer to enter a foreign country for touristic and leisure purposes only and stay for a predetermined amount of time. These visas do not entitle the holder to work or engage in any business activities in the host country.

Indonesia
Japan
Laos
JORDAN
Malaysia
Maldives
Nepal
North Korea
Russia
Singapore
South Korea
Sri Lanka
Thailand
Turkey
United Arab Emirates
Vietnam
Canada
Australia
Kenya
Hongkong
Fiji`,
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-purple-600',
    darkColor: 'from-purple-400 to-purple-500'
  },
  {
    title: 'Documentation',
    description: `* Receive and review visa applications, ensuring all necessary documents are included and completed accurately.
* Verify the authenticity and validity of supporting documents and information provided by the Customers.
* Maintain an organized system for tracking and managing visa documentation.
* Prepare and submit visa applications to the appropriate embassy or consulate.
* Keep updated records of visa application statuses and communicate with customers regarding any additional requirements or changes in the application process.
* Serve as a point of contact for Customers, providing them with clear and accurate information about the visa application process, requirements, fees, and processing times.
* Respond to Customers inquiries promptly and professionally, maintaining excellent customer service.
* Address any issues or challenges that arise during the visa application process, such as missing documents, discrepancies, or delays.
* Conduct regular quality checks to ensure accuracy and completeness of visa documentation. Review visa applications thoroughly, identifying any errors or inconsistencies and rectifying them before submission.
`,
    icon: DocumentCheckIcon,
    color: 'from-green-500 to-green-600',
    darkColor: 'from-green-400 to-green-500'
  },
  {
    title: 'Schengen Visa',
    description: `(A Schengen visa allows non-EU nationals to enter and stay in the Schengen area (29 European countries) for short, temporary visits (up to 90 days in any 180-day period) for purposes like tourism, business, or visiting family, but not for work)

Short-Stay Visa: A Schengen visa is a short-stay visa, meaning it allows you to stay in the Schengen area for a maximum of 90 days within any 180-day period. 

Purpose: It's intended for short-term travel for purposes like tourism, business meetings, family visits, medical treatment, studies, or training placements lasting under 3 months. 

Transit: It also allows transit through the Schengen area and airports. 

Not for Work: A Schengen visa does not grant the right to work within the Schengen area. 

This includes 25 of the 27 members of the European Union, namely:

Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, and Croatia. 

Non-EU Member States:
Iceland, Liechtenstein, Norway, and Switzerland.`,
    icon: UserGroupIcon,
    color: 'from-red-500 to-red-600',
    darkColor: 'from-red-400 to-red-500'
  },
  {
    title: 'Apply For Passport',
    description: `what is Passport?

A formal document issued by an authorized official of 
a country to one of its citizens that is usually necessary for
 exit from and reentry into the country, that allows the citizen
  to travel in a foreign country in accordance with visa requirements, 
  and that requests protection for the citizen while abroad.`,
    icon: BuildingOfficeIcon,
    color: 'from-yellow-500 to-yellow-600',
    darkColor: 'from-yellow-400 to-yellow-500'
  },
  {
    title: 'Resume Writing',
    description: `A resume is a summary of your work profile, combined with your most recent achievements and skills. A well-written resume is a one- or two-page document that states your relevant skills and work experience. What is A Resume ?


Your resume puts forward your most important skills and accomplishments to inform the HR manager that you are the right candidate for the role.
Resumes also offer an effective way for you to assess your career trajectory and skills to make suitable adjustments or additions to them as per the demand in the industry. It is your first impression to the recruiter and helps them decide whether to invite you to interview. Writing a strong resume typically requires planning and understanding what the hiring managers are looking for, as it can be difficult to detail every single aspect of your work experience within one or two pages.`,
    icon: AcademicCapIcon,
    color: 'from-indigo-500 to-indigo-600',
    darkColor: 'from-indigo-400 to-indigo-500'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const [showConsultation, setShowConsultation] = useState(false);

  const toggleCard = (title: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't open popup if clicking the "Read More" button
    if ((e.target as HTMLElement).closest('button')) return;
    setShowConsultation(true);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Immigration Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We handle every aspect of your visa application process with expertise and dedication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="card h-full hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={handleCardClick}
              >
                <div className="relative p-6">
                  {/* Service Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} dark:${service.darkColor} 
                                 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 
                               transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <div className="relative">
                    <div className={`text-gray-600 dark:text-gray-300 whitespace-pre-line transition-all duration-300 ${
                      expandedCards[service.title] ? '' : 'line-clamp-3'
                    }`}>
                      {service.description}
                    </div>
                    
                    {/* Read More Button */}
                    {service.description.split('\n').length > 3 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(service.title);
                        }}
                        className="mt-2 text-primary hover:text-primary-dark flex items-center text-sm font-medium transition-colors duration-300"
                      >
                        {expandedCards[service.title] ? (
                          <>
                            Show Less
                            <ChevronUpIcon className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Read More
                            <ChevronDownIcon className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 
                                dark:from-primary-400/0 dark:via-primary-400/5 dark:to-primary-400/0
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/* <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center mx-auto group">
            Explore All Services
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button> */}
        </motion.div>
      </div>

      <ConsultationForm 
        isOpen={showConsultation} 
        onClose={() => setShowConsultation(false)} 
      />
    </section>
  );
} 