import mainLogo from "../assets/DeleosysLogo.png";
import footerlogo from "../assets/deleosys-footerLogo.png";
import heroimg1 from "../assets/hero-slider-img1.jpg";
import heroimg11 from "../assets/tech-ipad-img1.1.png";
import heroimg2 from "../assets/hero-slider-img2.png";
import heroimg21 from "../assets/hero-slide-img2.1.png";
import supplychain from "../assets/supply-chain.png";
import userexperiance from "../assets/user-experiance.png";
import ideabulb from "../assets/idea-bulb.png";
import integration from "../assets/integration.png";
import wcuimage from "../assets/wcuimage.png";
import design1 from "../assets/design1.png";
import aboutusbg from "../assets/aboutusbg.jpg";
import colleageuesworking from "../assets/colleagues-working-project-discussing-details.jpg";
import confidentbusinessmen from "../assets/confident-businessmen.jpg";
import teamgroupimage from "../assets/teamgroupimage.jpg";
import ourmomentsmillingface from "../assets/ourmomentsmilingex.jpg";
import aboutusimg2 from "../assets/aboutusimg2.png";
import bussinesspeople from "../assets/business-people-casual-meeting.jpg";
import peopleanalyzingdata from "../assets/people-analyzing-finance.jpg";
import cooperation from "../assets/cooperation.png";
import skills from "../assets/skil-team.png";
import quality from "../assets/quality.png";
import support from "../assets/support.png";
import skill1 from "../assets/skill1.png";
import deal1 from "../assets/deal1.png";
import scalibilty from "../assets/scalibilty.png";
import teamworking from "../assets/teamworking.jpg";
import rocket from "../assets/rocket.png";
import global from "../assets/global.png";
import carrierheroimage from "../assets/career-hero-image.png";
import growthicon from "../assets/growth-icon.png";
import groupicon from "../assets/group-icon.png";
import gifticon from "../assets/gift.png";
import trendicon from "../assets/group-icon.png";

// service

import serviceherobg from "../assets/servicesherobg.jpg";
import servicebgmain from "../assets/servicesheromain.png";
// option web
import serviceoptionweb from "../assets/servicesbg1.png";
import layouticon from "../assets/serviceoption1-layout.png";
import carticon from "../assets/serviceoption1-cart.png";
import cloudicon from "../assets/serviceoption1-cloud.png";
import uxuiicon from "../assets/serviceoption1-ux-ui.png";
import analysisicon from "../assets/serviceoption1-analysis.png";
import circleloadingicon from "../assets/serviceoption1-circleloading.png";
import deviceicon from "../assets/serviceoption1-device1.png";
import searchicon from "../assets/serviceoption1-search.png";
import shieldicon from "../assets/serviceoption1-shield.png";
// option app

import serviceoptionapp from "../assets/servicesbg2.png";
import androidicon from "../assets/serviceoption2-android.png";
import iosicon from "../assets/serviceoption2-ios.png";
import mobileicon from "../assets/serviceoption2-mobile.png";
import brifcaseicon from "../assets/serviceoption2-briefcase.png";
import supporticon from "../assets/support.png";
import rocketicon from "../assets/rocket.png";
import trend from "../assets/trend.png"
//shieldicon

// option cyber
import serviceoptioncyber from "../assets/servicesbg3.png";
import globalicon from "../assets/global.png";
import secureicon from "../assets/serviceoption3-secure.png";
import padlockicon from "../assets/serviceoption3-padlock.png";
import cybersecurity from "../assets/serviceoption3-cyber-security.png";
//shieldicon
import datalossicon from "../assets/serviceoption3-dataloss.png";
//shieldicon
import insureanceicon from "../assets/serviceoption3-insurance.png";

// custom soft
import serviceoptioncustom from "../assets/servicesbg4.png"
// groupicon
import truckicon from "../assets/deliverytruck .png"
import softwareicon from "../assets/software.png";
//settingicon-pending
//layouticon
//brifcaseicon

// ai and auto
import serviceoptionaiauto from "../assets/servicesbg5.jpg"
import chaticon from "../assets/chaticon.png"
import settingicon from "../assets/setting.png"
//growth
import integrationicon from "../assets/integrationaiautoicion.png"
import automationicon from "../assets/automation.png"
import timeicon from "../assets/timeicon.png"
//growth
//rocket

import businessman from "../assets/medium-short-bussinessteam.jpg";
import welcomepeople from "../assets/mediumshort-welcomepeople.jpg";
import doctormeeting from "../assets/doctor-meeting.jpg";
import meeting from "../assets/team-collabration-office.jpg";
import wjuimage from "../assets/wju-image-1.png";

//CONTACT
import contactherobg from "../assets/contactherobg.png"
import contactheromain from "../assets/contactheromain.png"
import workplaceicon from "../assets/workplace.png"
import officeicon from "../assets/office.png"
import locationicon from "../assets/locationicon.png"
import mailicon from "../assets/mailicon.png"
import callicon from "../assets/callicon.png"
const companyName = "Deleosys";
const companyFullLegalName = "Deleosys Technologies Private limited";
const supportEmail = "info@deleosys.com";
const mainPhone = "+919270137130";
const address = "Sehore, Madhya Pradesh";

export const brandConfig = {
  meta: {
    companylogo: mainLogo,
    footerlogo: footerlogo,
    name: companyName,
    tagline: "Ship Smarter, Go Farther - Your Trusted Courier Partner",
    mainPhone:mainPhone,

    home: {
    
      hero: {
        slider1: {
          image1: heroimg1,
          image2: heroimg11,
          title: "Building future-ready digital experiences.",
          description:
            "From strategy to design and technology, we help organizations transform ideas into scalable digital solutions.",
          buttonText: "Explore our work",
          buttonLink: "/",
        },

        slider2: {
          image1: heroimg2,
          image2: heroimg21,
          title: "Courier Aggregator SaaS Platform",
          description:
            "Aggregate and manage shipments from multiple courier services with a powerful SaaS platform designed for efficiency and scale.",
          primaryButtonText: "Explore Platform",
          primaryButtonLink: "/platform",
          secondaryButtonText: "Request Demo",
          secondaryButtonLink: "/demo",
        },
      },

      nav: {
        banner: {
          text: `${companyName} is now live at www.deleosys.com`,
        },
        menuItems: [
           { label: "Home", path: "/" },
          {
            label: "Services",
            path: "#",
            subMenu: [
              { label: "Web Development", path: "/web-dev" },
              { label: "App Development", path: "/app-dev" },
              { label: "Cyber Security", path: "/cyber" },
              { label: "Custom Software", path: "/custom-soft" },
              { label: "AI & Automation", path: "/ai-auto" },
            ],
          },
          {label: "Our Product",
            path: "#",
            subMenu:
            [ { label: "Shipcave", path: "https://shipcave.com/" }] },
          { label: "About", path: "/about" },
          { label: "Careers", path: "/careers" },
          { label: "Contact", path: "/contact" },
        ],
        buttons: {
          getstarted: "Get Started",
        },
      },
    },

    contactPage: {
      companyName: companyFullLegalName,
      address,
      phone: mainPhone,
      email: supportEmail,
    },

    contactPageData: {
      herosection: {
        contactherobg: contactherobg,
        contactheromain: contactheromain,
      },
      icon: {
        workplaceicon: workplaceicon,
        brifcaseicon: brifcaseicon,
        officeicon: officeicon,
        locationicon: locationicon,
        mailicon: mailicon,
        callicon: callicon,
      },
    },

    OurServicesimg: {
      supplychain: supplychain,
      userexperiance: userexperiance,
      ideabulb: ideabulb,
      integration: integration,
      design1: design1,
    },

    about: {
      abouthero: {
        aboutherobg: aboutusbg,
        aboutusimg2: aboutusimg2,
      },
      OurJourney: {
        teamgroupimage: teamgroupimage,
      },
      ourmoments: {
        ourmomentsmillingface: ourmomentsmillingface,
        colleaguesworkingproject: colleageuesworking,
      },
      whychoose: {
        confidentbusinessmen: confidentbusinessmen,
        cooperation: cooperation,
        skill: skills,
        quality: quality,
        ideabulb: ideabulb,
        support: support,
      },

      DrivenbyInnovation: {
        businesspeople: bussinesspeople,
      },
    },

    whyChooseus: {
      wcuimage: wcuimage,
      features: {
        skill: skill1,
        deal: deal1,
        scalibilty: scalibilty,
      },
    },
    CultureTalent: {
      teamworkingimage: teamworking,
    },

    casestudy: {
      peopleanalyzingfinance: peopleanalyzingdata,
    },
    Industries: {
      features: {
        shortbussinessman: businessman,
        doctormeeting: doctormeeting,
        meeting: meeting,
        welcomepeople: welcomepeople,
      },
    },
    contact: {
      images: {
        bulb: ideabulb,
        rocket: rocket,
        global: global,
      },
    },
    carrier: {
      carrierhero: {
        herobg: aboutusbg,
        carrierheroimage1: carrierheroimage,
      },
      Taketheright: {
        rocketicon: rocket,
        growthicon: growthicon,
        groupicon: groupicon,
      },

      WhyJoinDeleosys: {
        wjuimage: wjuimage,
        gifticon: gifticon,
        devlopmenticon: ideabulb,
        trendicon: trendicon,
        groupicon: groupicon,
      },
    },


    // SERVICES

    Services: {
      servicehero: {
        serviceherobgimg: serviceherobg,
        servicebgmain: servicebgmain,
      },

      // WEB
      webapp: {
      webapp: { 
        webappbanner: serviceoptionweb,
      },
      WhatWeOffer: {
        layouticon: layouticon,
        carticon: carticon,
        cloudicon: cloudicon,
        uxuiicon: uxuiicon,
        analysisicon: analysisicon,
      },
      WhyChooseUs: {
        circleloadingicon: circleloadingicon,
        deviceicon: deviceicon,
        searchicon: searchicon,
        shieldicon: shieldicon,
      },
    },

//APP DEV
    appdev : { 
       appdev:{
        appdevbanner: serviceoptionapp,
      },
      WhatWeOffer: {
        android: androidicon,
        ios: iosicon,
        mobile: mobileicon,
        brifcase: brifcaseicon,
        support: support,
      },
      WhyChooseUs: {
        rocket: rocketicon,
        trend:trend,
        shieldicon: shieldicon,
      },
    },

    // CYBER SECURITY

      cyber : { 
      cyber:{
        cyberbanner: serviceoptioncyber,
      },
      WhatWeOffer: {
        globalicon: global,
        secureicon: secureicon,
        padlockicon: padlockicon,
        cybersecurityicon: cybersecurity,
        shieldicon: shieldicon,
      },
      WhyChooseUs: {
        datalossicon :datalossicon,
        shieldicon: shieldicon,
        insureanceicon:insureanceicon,
      },
    },

    //CUSTOM SOFT
      customsoft : { 
      customsoft:{
        webappbanner: serviceoptioncustom,
      },
      WhatWeOffer: {
        groopicon: groupicon,
        truckicon: truckicon,  // change  baki icon truck
        softwareicon: softwareicon,
        settingicon: settingicon,  //change baki setting icon
        layouticon: layouticon,
      },
      WhyChooseUs: {
        brifcaseicon: brifcaseicon,
        trcukicon: truckicon,  // change  baki icon truck
        settingicon: settingicon,  //change baki setting icon
      },
    },

    // AI AND AUTO
      aiandauto : { 
      aiandauto:{
        webappbanner: serviceoptionaiauto,
      },
      WhatWeOffer: {
        chaticon: chaticon,
        settingicon: settingicon,  //setting peding
        growthicon:growthicon,
        integrationicon:integrationicon,
        automationicon:automationicon
      },
      WhyChooseUs: {
        timeicon:timeicon,
        growthicon:groupicon,
        rocketicon:rocket,
      },
    },
  },
  },
};
