import { IData } from '../types';

const data: IData = {
  data: {
    personalDetails: {
      name: 'Parth Patel',
      profile: 'iOS Developer',
      about:
        "I prioritize continuous learning and staying current in the iOS ecosystem, enabling me to deliver cutting-edge solutions. I firmly believe in a strong codebase and maintainable, logical code, ensuring both innovation and long-term project success.",
      profileImage: 'parthpatel.png',
    },

    education: {
      colleges: [
        {
          name: 'Aditya Silver Oak Institute Of Technology',
          courseTag: 'BE',
          course: 'Information Technlogy',
          year: {
            start: 2019,
            end: 2023,
          },
        }
      ],
    },

    workExperience: {
      jobs: [
        {
          name: 'AllianceTek',
          position: 'Jr. iOS Developer',
          description:"Actively working for development of 'CarePool' while leading a camera application project named 'ObservedApp' featuring live streaming, recording, and intricate hardware integration, including switches, bridges, encoders, routers, all under the guidance of my Team Lead.",
          duration: '01-08-2023 to current (presnetly 2 months)',
          year: {
            start: 2023,
            end: 0,
          },
        },
        {
          name: 'AllianceTek',
          position: 'Intern',
          description:
            `Transitioned to live project 'CarePool,' a active cab application, with numerous additional features, including background services, Zeendrive insurance SDK integration, Apple Push Notifications, and more, to enhance the user experience.
            '16-06-2023  to  01-08-2023 (1.5 months)'
            
            I've mastered SwiftUI, creating three distinct apps with intricate custom UIs and robust, organized codebases.
            02-05-2023  to  15-06-2023 (1.5 months)
            
            Learned Swift and created 'Cook Fiesta,' a Swift-based iOS recipe app with Firebase, Cocoa Touch classes, API integration, data parsing, and UI components expertise.
            21-01-2023  to  01-05-2023 (3 months)`,
          duration: '6 months',
          year: {
            start: 2023,
            end: 2023,
          },
        }
      ],
    },

    personalProjects: {
      tagLine: 'hobbies.contains(coding) == true',
      projects: [
        {
          name: 'Flutter',
          stack: 'DART',
          description:
            'Currently gaining proficiency in the Dart language for cross-platform development using Flutter.',
          // link: 'https://mockstudio.vercel.app',
          year: 2023,
          status: 0,
        },
        {
          name: 'Basic Kotlin',
          stack: 'KOTLIN',
          description:
            'Studied Kotlin syntax and fundamentals to enhance collaboration with the Android development team.',
          // link: 'https://tweet-to-img.vercel.app',
          year: 2023,
          status: 2,
        },
        {
          name: 'Basic Objective-C',
          stack: 'OBJECTIVE-C',
          description:
          "Learned basic Objective-C for seamless integration of Objective-C code and libraries with Swift.",
          year: 2023,
          status: 2,
        },
        {
          name: 'Core Swift',
          stack: 'SWIFT',
          description:
            'Started iOS developer career in 2023, acquiring proficiency in Swift programming.',
          year: 2023,
          status: 1,
        },
        {
          name: ' Object-oriented programming',
          stack: 'JAVA',
          description:
            "Acquired fundamental Java skills to grasp OOP concepts during Bachelor's in Engineering",
          year: 2022,
          status: 2,
        },
      ],
    },

    techSkill: {
      programmingLanguages: ['Swift', 'Objctive-C'],
      frameworks: ['UIKit' ,'SwiftUI','Core Data' ],
      database: ['Postgres', 'MongoDB', 'MySQL'],
    },

    otherSkill: {
      cloud: ['AWS', 'GCP', 'Supabase', 'Firebase', 'CI/CD'],
    },

    languages: ['Gujarati', 'Hindi', 'English'],

    contactDetails: [
      {
        platform: 'Phone',
        text: '+91 8866089024',
        link: 'tel://918866089024',
      },
      {
        platform: 'Email',
        text: 'mail2patelparth@gmail.com',
        link: 'mailto://mail2patelparth@gmail.com',
      },
      {
        platform: 'LinkedIn',
        text: '@devParthiOS',
        link: 'https://www.linkedin.com/in/devparthios',
      },
      {
        platform: 'WhatsApp',
        text: '+91 8866089024',
        link: 'https://wa.me/918866089024/',
      },
      {
        platform: 'Discord',
        text: '@devParthiOS',
        link: 'https://discord.com/users/1152583497614110760',
      },
      {
        platform: 'Resume',
        text: 'Parth Patel',
        link: 'https://drive.google.com/file/d/1xI5yTddoG6pGkWONYN9qcnzVN-VcMh6U/view?usp=drive_link'
      }
    ],
  },
};

export default data;
