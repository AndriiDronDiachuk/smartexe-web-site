$(document).ready(function ($) {

    var library = {

        // ============= TECHNOLOGIES ==============
        '../technologies/technologies_main.html': {
            title: 'Technologies',
            text: '' +
            'Technologies. ' +

            'Web. ' +
            'We use advanced web technologies, modern programming languages, common methods and great tools to create state of the art yet highly scalable websites and web apps that are not only functional but also look good. ' +

            'Mobile. ' +
            'Our Mobile App Development experts build excellent mobile apps using native and cross-platform technologies to make sure that your mobile app run smoothly on all the major operating systems such as iOS and Android. ' +

            'Video & Audio. ' +
            'Our team of talents have extensive experience of more than 10 years and dozens of Video & Audio related projects. We build software to capture, encode, decode, manipulate, stream and broadcast top quality video content at any scale. ' +

            'Games. ' +
            'The videogame development cycle has increased significantly over the past decade. We’re well aware, and can help program, develop and test your games. Your gamers don’t want to wait, we’ll make sure they won’t have to. ' +

            'Blockchain. ' +
            'Blockchain technology is changing the monetary world as we knew it. At Smartexe we have experience and knowledge in building Blockchain software for platforms like Ethereum, Open Zeppelin, web3j, geth and more. ' +

            'Embedded. ' +
            'From your digital watch to the avionics in an airliner, embedded systems have become an integral part of our lives. Systems on a chip, hardware testing and bring-up, operating system integration – demand continues to rise for these services, so we’re here to help. '
        },

        '../technologies/technologies_web_development.html': {
            title: 'Web',
            text: 'Web. ' +
            'Our developers have experience crafting websites for clients within a variety of industries, from tourism to high-technology. We can generate pages based on any form of code, bringing your digital presence to life on any web-browser or mobile platform. Below, we’ve listed the various languages we’ll use to make your website the way you like. ' +
            'Front-end: • JavaScript; • ES6; • WebSockets; • Comet; • AJAX; • JSONP; • Server Side Even; • angular.js; • react.js; • async.js; • jQuery; • lodash.js; • underscore.j; • bootstrap.js; • chart.js; • json; • Yeoman; • Gulp.js; • Grunt; • HTML5; • CSS3; • Responsive Web Design; • SASS; • LESS; • Bootstrap.css. ' +
            'Back-end: • Node.js; • Express.js; • PHP (Symfony3, Zend); • Java; • ASP.NET; • C#; • C++; • Python. ' +
            'Databases: • MySql; • Oracle pl/sql; • MongoDb; • Redis; • PostgreSQL; • SQLite; • MSSQL. ' +
            'Social API: Google; • LinkedIn; • Facebook; • Dropbox; • Twitter. ' +
            'Our cases of study. BookThingsToDo Case Study. Cloud Kafé Case Study. '
        },

        '../technologies/technologies_mobile_applications.html': {
            title: 'Mobile',
            text: 'Mobile. ' +
            'The mobile world is upon us. You, your employees, and your customers are all on the move – perhaps even as you read this. This calls for a new era of design, a new way of thinking. Your mobile applications and devices must be as responsive and stylish as the customers who use them. Whether you need help with your software or hardware, we’re ready to assist. We know, there’s an overwhelming variety of mobile hardware and operating systems. Don’t worry! We’ve got just as many skilled team members ready to handle the variety. Here are some areas we can help with: ' +
            'Applications: • Business-to-Business (B2B); • Client-Server; • Games and Entertainment; • Native Mobile; • PhoneGap, Xamarin, Marmalade SDK; • Special-Purpose Proprietary; • Social Networking. ' +
            'Operating Systems & Platforms: • Android; • iOS; • Windows Mobile; • Tizen. ' +
            'Our cases of study. Rounds Case Study. '
        },

        '../technologies/technologies_video_audio.html': {
            title: 'Video & Audio',
            text: 'Video & Audio. ' +
            'A technology that has changed both our professional and personal lives, audio- and video-over-IP allows us to interact with each other in a way we may have never thought possible. Suddenly, distance is no limiting factor for communication. Executives stuck in Tokyo? This technology permits face-to-face communication with whoever we want, whenever we want.Regardless of your requirements, we’ve got you covered. Below, we’ve listed some of our specific capabilities and technologies: ' +
            'Main Direction for Video: • Preparation Video Content; • Streaming Engine; • CDN; • Delivery Content. ' +
            'Encoding/Decoding Standards & Tools: • H.264/AVC; • MPEG-1/2; • MJPEG; • WEBM; • AAC; • H.264/AVC Intel QSV; • MPEG; • MPEG-4; • WME; • FLV; • AC3. ' +
            'Streaming Protocols: • RTP; • RTMP; • MPEG-DASH; • RTSP; • HLS; • HDS. ' +
            'Streaming Engine: • WOWZA; • Restreaming; • Camera API; • nDVR; • Transcoder; • Java-based custom modules; • RED5; • ASTERISK; • SIP; • LIVE.555; • RTSP; • Web Sockets; • RTMP Flash; • Streaming. '
        },

        '../technologies/technologies_games.html': {
            title: 'Games',
            text: 'Games. ' +
            'Not just a way to pass the time, videogames have become a lifestyle, a true example of digital interaction at its most advanced stage. It’s no longer enough to bounce a ball back and forth across a screen. Modern users demand truly unique, beautiful experiences that offer fascinating and sometimes touching experiences. Our design teams have worked on a wide variety of creative projects, including mobile- and computer-based games. Using an extensive selection of tools, let us help you craft an epic experience for your customers. ' +
            'Here are just a few of the tools at our disposal: • Unity 2D/3D; • Cocos2d; • Adobe Flash; • Sketchbook Pro; • Face Robot; • Eon Vue; • IClone. '
        },

        // ==== Blockchain ====
        // '../technologies/': {
        //     title: 'Blockchain',
        //     text: '' +
        //     ' '
        // },

        '../technologies/technologies_embedded.html': {
            title: 'Embedded',
            text: 'Embedded. ' +
                'Embedded technology requires a number of things: concision, mobility, unity. We understand the role this technology plays in an increasingly electronic world. Our experts possess the ability to work within this framework, helping you to develop a platform that works in synchronization with its unified architecture. With embedded technology, the goal is to deliver a product, the value of which is greater than the sum of its parts. We’ll help you with the various procedures necessary to make that happen. ' +
                'We can help with each of the processes listed below: • SoC pre silicon model and post silicon validation; • Hardware bring up (different complexity): electronics fix, core and peripheral bring up; • BSP; • Various boot loader; • RTOS; • Multi-core and SMP; • Kernel, driver development and support; • Porting to different platforms; • Power management aspects; • Optimization and benchmarking; • Networking stack; • OS’s: Linux, Android, Nucleus, RexOS, QNX and other; • Automated and manual testin. '
        },


        // ============= SERVICES ==============
        '../service/service_main.html': {
            title: 'Services',
            text: 'Services. ' +
            'Smart.exe serves as your technical partner, working with you to make your ideas a reality. ' +
            'We offer services that enable your company to succeed in a wide range of technical capacities. However, we never take on a project that we can’t execute to perfection. Our staff consists of talented professionals well-versed in the areas of product management, technical implementation and end-to-end project solutions. ' +
            'We are ready to take on projects in any of the following areas: ' +

            'Software Development. ' +
            'You’ve got a great idea that you believe in, that’s a very good start. We are here to make this idea a reality going through all the development cycles with you, from research and design through development and QA, whether you decide to manage your extended team on your own or if you want us to manage your team for you, our dedicated team of experts will make sure that you get the highest return on your investment. ' +

            'Project Management. ' +
            'If you know exactly what you want and you already have a well-defined product requirements and specifications on one hand and limited budget on the other, project management is the right option for you. Our technical leaders will research, plan and manage the project for you so that your product will be ready on-time and within your budget. ' +

            'Quality Assurance. ' +
            'Smartexe QA and testing services are made to ensure that your product maintains the highest quality so that you don’t have to worry about your reputation and brand. We offer our QA and testing services to customers that need dedicated QA team for ongoing quality assurance of existing live products and for testing software products during development, before they are released to the market. ' +

            'Product Management. ' +
            'Product management is as important as software engineering. Often making the right decision about a new feature or a whole new product is crucial to the success of your business. Our product management services are made for customers that need help in organizing their product requirement and do not have enough internal resources for to design the optimal product, whether it is MVP or a full featured product. ' +

            '2D/3D Graphic Design & Animation. ' +
            'Our team of graphic designers are all experts in their domain and are ready to help our customers design a good-looking web site or mobile app, as well as 2D or 3D games for desktop and mobile. Eye-catching, intuitive, simple or sophisticated with great UX, either way, we can help making sure that your vision becomes a reality. ' +

            'Cloud IT. ' +
            'Cloud technology enables anyone to setup the backend infrastructure in no-time with low costs, without the risk of investing in hardware and the overhead of hosted servers. Our Cloud IT services are suitable for customers who have reached a certain scale and need IT management of their cloud infrastructure. '
        },

        '../service/service_development.html': {
            title: 'Software Development',
            text: 'Software Development. ' +
            'If you need technical help developing a product, you’ve come to the right place. Here at Smart.exe, we’ll help with every phase of the development process, from planning to testing. Whether you’re missing that one developer to help make your dream software a reality, or if you’d rather focus your own talented staff elsewhere, we can provide the technologies you need to finish the job. ' +
            'Specific Services: • Software development: planning, implementation, testing, documentation, and deployment; • Prototyping and Proof of Concept; • Architectural design; • Client-server sites; • Offshore development. ' +
            'Skilled Specialists. From recent college graduates with fresh ideas to experienced developers with tried-and-true methods, our research and development centers are full of tech-savvy professionals. These engineers, developers, and testers – working in conjunction with your current staff – will serve as the creative force driving your idea to reality. ' +
            'Time Management. Here, we shoot for efficiency, for speed and precision – that’s why we’ll help you seamlessly integrate various development stages. Our teams are accustomed to operating under pressure and within a deadline-oriented environment. ' +
            'Out Whitepaper. BookThingsToDo Case Study.'
        },

        '../service/service_project_management.html': {
            title: 'Project Management',
            text: 'Project Management. ' +
            'Our project managers will provide you with a leader who will orchestrate the various tasks and resources involved in making your idea or project a reality. This project manager is here to keep your project on track, to unify a team or group of teams all working in harmony towards the completion of your project. ' +
            'Specific Services: • Coordination with external sources of products or services necessary for project implementation; • Coordination between various Smart.exe teams working on the same project; • Planning and organization of the required Smart.exe teams; • Task definition and allocation; • Time management; • Coordination with the client. ' +
            'Orchestration, Coordination. Our project manager is here to unify multiple teams, which may be located around the globe. We’ll work directly with you to define requirements of your specific project, then allocate resources as necessary to get the job done. ' +
            'Technical Background. We pledge to provide a leader with the technical background and technologies necessary to execute your specific plan – your project requires it. ' +
            'Out Whitepaper. Outsourcing Strategies for Every Business.'
        },

        '../service/service_quality_assurance.html': {
            title: 'Quality Assurance',
            text: 'Quality Assurance. ' +
            'Testing, troubleshooting, re-testing. You’ve developed a product. Does it work the way you want? What needs to change? We’d like to help you figure that out. With our quality assurance programs, we’ll provide you with an easy way to test your product. Whether your goal is to identify potential bugs and glitches, or if you’re looking to ensure compliance with various standards and regulations, we’ll arm you with the experienced QA team you need to deliver a solid product. ' +
            'QA Personnel. We staff each of our research and development centers with quality assurance personnel. These employees are unified under the vice president of QA, who serves as a link between you and our teams. ' +
            'Various Methodologies. We employ a wide-range of techniques to test and troubleshoot your product. Per your request, we can employ automatic or manual testing procedures, or both. ' +
            'Flexibility. The QA process is generally associated with a near-complete product, but may also be folded in throughout the product’s entire development. We offer the ability to combine this process with our other product management and development services. ' +
            'Specific Services: • Functional Testing (both manual and automated); • Software Test Document (STD) creation; • Performance testing; • Penetration testing; • Security testing; • Risk analysis; • Load testing. ' +
            'Out Whitepaper. Four Steps to Better Quality Assurance.'
        },

        '../service/service_product_management.html': {
            title: 'Product Management',
            text: 'Product Management. ' +
            'At Smart.exe, we pair our extensive network of resources with a skilled product management team that follows your product throughout its entire lifecycle. The end-goal is to help you create a product that is exactly to specification, one that accurately reflects the original vision you had when you set out to build this product. ' +
            'Research. As an integral part of the development process, research and due diligence allows us to explore your product’s concept, its functional and architectural requirements, and to identify which tools we’ll need to help you realize it. ' +
            'Product Specification. We’ll make sure your product is designed exactly to its intended specification. The center of the entire production continuum, the product specification stage allows us to proceed efficiently with the product development cycle. ' +
            'Product Manager. To facilitate this process smoothly, we assign a highly-trained product manager to serve as liaison for all parties involved. Aside from keeping the product on-track, the manager will coordinate communications between you and the various teams working on the product. ' +
            'Specific Services: • Coordination with the client and with other Smart.exe teams; • High-level product requirement documentation (PRD); • Periodical product reviews and modifications; • Functional specifications (FRD); • Preliminary research; • Additional R&D. ' +
            'Out Whitepaper. Outsourcing Strategies for Every Business.'
        },

        '../service/service_graphic_design.html': {
            title: '2D/3D Graphic design And Animation',
            text: '2D/3D Graphic design And Animation. ' +
            'Artists and creative teams no longer rely on the pencil and paintbrush of yesterday to craft a compelling picture or design. Though these tools still exist, they are joined now by an extensive digital creative suite to help make your dream a reality. ' +
            'Ideas. The fact of the matter: your design and creative team must be talented, visionary. You want somebody that can connect with your idea, or even help you develop it. Our teams can take direction, if necessary – if you’ve got an exact plan, we’ll carry it out. ' +
            'Creation. To execute your vision, we utilize talented individuals with powerful creative tools and the latest technologies at their disposal. If it can help us realize your vision, we know how to use it. ' +
            'Revision. Design is style, class and utility – evolving and ever changing. We understand, and we’ll help you evolve with the latest trends without sacrificing usability. ' +
            'Specific Strengths: • Adobe Flash, Photoshop, After Effects, and Premie; • Pixologic Zbrush; • Sketchbook Pro; • Unity 2D/3D; • Face Robot; • 3Ds Max; • 3D Coat; • Eon Vue; • IClone. ' +
            'Out Whitepaper. Rounds Case Study.'
        },

        '../service/service_cloud_it.html': {
            title: 'Cloud IT',
            text: 'Cloud IT. ' +
            'Cloud technology: a new way of life, revolutionizing the way we store and access information on both a professional and personal level. With its advent, businesses have begun moving entire stores of data and programs into the virtual environment, giving them critical access anywhere, anytime. We’re here to help you make that transition, whether it means developing tools specifically for you, or simply advising you throughout the process. ' +
            'Reduced Costs. Moving to the cloud will save you a substantial amount of money in software and hardware costs. While living in the cloud-based virtual world, specific maintenance costs disappear; it’s no longer your problem, it’s the cloud provider’s. ' +
            'Variety. We haven’t invented every use for the cloud…yet. There are so many possibilities, and if we can’t provide you with a solution to suit your needs, we’ll develop one. ' +
            'Vision. Small or large, each company may have different cloud requirements. We want to help with your vision, providing elasticity, scalability, and service throughout the whole process. ' +
            'Specific Services: • Cloud configuration; • Cloud management; • Cloud migration; • Cloud optimization. ' +
            'Out Whitepaper. Cloud Kafé Case Study.'
        },


        // ============= INDUSTRIES ==============
        '../industries/industries_main.html': {
            title: 'Industries',
            text: 'Industries. ' +
            'Telecommunication. Multimedia. High-Tech Software. Games Development. E-Commerce. Media & Marketing. Cloud Computing. Cryptocurrency. '
        },

        '../industries/industries_telecommunication.html': {
            title: 'Telecommunication',
            text: 'Telecommunication. ' +
            'Keeping in touch – we’ll help you do it, regardless of distance or time zone. By outsourcing your telecommunication through Smart.exe, you establish a global presence. Our teams, located throughout a variety of nations, will help you communicate around the clock, providing a local number for your foreign customers to call. ' +
            'By allowing us to handle your telecommunication, you’ll also gain a significant advantage: time to focus on your unique products and solutions. This keeps you rolling in an increasingly competitive economic climate. ' +
            'However, we can do more than field calls for you. We can also help you construct a strong telecomm foundation, whether through the internet, a cellular network, or the more traditional landline network. The goal is constant communication, and we can help with that. ' +
            'Download our whitepaper. Outsourcing Strategies for Every Business.'
        },

        '../industries/industries_multimedia.html': {
            title: 'Multimedia',
            text: 'Multimedia. ' +
            'We can help you develop your digital production into the masterpiece you imagine. Our multimedia experts possess a wide variety of editing equipment, which they can use to manipulate your feature however you’d like. ' +
            'While we can edit various raw video and audio, we can also develop and modify animations, whether it be for advanced computer programs, interactive web features, flash-based advertisements, etcetera. ' +
            'We can also seamlessly integrate our services, providing you with a consistent format throughout a series of products, whether they be web-based or on a disk. We’ll help you custom-tailor the experience for any format, or variety of formats. If it doesn’t work with a specific codec or within the context of your vision, we’ll fix it or start from scratch. ' +
            'Download Our Case Study. Rounds Case Study.'
        },

        '../industries/industries_high_tech_software.html': {
            title: 'High-Tech Software',
            text: 'High-Tech Software. ' +
            'As a high-tech startup, you’re familiar with the challenges of developing and troubleshooting hardware and software that work correctly and seamlessly. As a highly technical business ourselves, we can offer some powerful tools, from our research and development centers to an extensive quality assurance process. ' +
            'Our experiences include: pre- and post-silicon chip development, systems integration, hardware bring-up of various complexity, multi- and single-core processor development and testing, and more. ' +
            'We can be as involved in your processes and development as you like. Feel free to contact us at any stage of development. ' +
            'Download our whitepaper. Outsourcing Strategies for Every Business.'
        },

        // ============ Games Development ============
        // '../industries/': {
        //     title: 'Games Development',
        //     text: 'Games Development. ' +
        //     ' '
        // },

        '../industries/industries_e_commerce.html': {
            title: 'E-Commerce',
            text: 'E-Commerce. ' +
            'E-Commerce has become a standard in world-wide trade. With the advent of global communication comes little excuse to stay hidden from your customers and users. We’ve got the tools you need to develop and maintain a thorough e-commerce network wherever you’re located. ' +
            'Handle client access/serves. It’s important to develop a well-designed, functional website for your customers to find you and your products. Do to this, you may need a substantial server to handle large volumes of client connections. You may even want to outsource customer support. You may want any number of solutions to help your e-commerce strategy – the point is, regardless of your needs, we know we can help. ' +
            'With offices and locations throughout the world, we have the ability to help you network in a variety of places you may have never thought possible. Or, if you’d like to keep it local, we can help with that, too. ' +
            'Download Our Case Study. BookThingsToDo Case Study.'
        },

        // ============ Media & Marketing ============
        // '../industries/': {
        //     title: 'Media & Marketing',
        //     text: 'Media & Marketing. ' +
        //     ' '
        // },

        '../industries/industries_cloud_computing.html': {
            title: 'Cloud Computing',
            text: 'Cloud Computing. ' +
            'It seems you just can’t get away from this term. In fact, you’ve probably seen us talking about it all over this website; we only hope you realize how committed we are to this technology. ' +
            'If you’re looking to join the cloud, you’ve chosen a great starting point. The cloud provides a refreshing new way to access and control data, programs, and even remote workstations. You’ll also find a few other fringe benefits: efficiency, and cost savings. The majority of cloud-based providers charge on a pay-per-use structure, which will save you significant licensing and hardware fees. ' +
            'Even if you’re just looking to dip your toes into the growing cloud-based internet pool, we’ll hold your hand. You’ve got unique needs, we’ve got unique solutions.'
        },

        '../industries/industries_crypto_currency.html': {
            title: 'Cryptocurrency',
            text: 'Cryptocurrency. ' +
            'Revolution in the global monetary system is here – meet cryptocurrency! If you really think about it, the cryptocurrency, as a decentralized network of peers which keeps track on accounts and balances, is a currency as any other existing today in your bank account. ' +
            'There are a few basic concepts behind each cryptocurrency design: Public Ledgers, Transactions, Mining, Adaptive Scaling, Cryptographic, Decentralization,Digital, Open Source, Proof-of-work/Proof-of-state and Value. Each concept can be used to leverage various adjacent financial applications. ' +
            'At Smartexe we have acquired the knowledge and experience in the relevant technologies: Block-chain, decentralized networks, proof-of-work/proof-of-state, high performance and parallel computing, etc. If you have an idea or need to implement cryptocurrency into other industries we will help you execute it. '
        },


        // ============= ABOUT US ==============
        '../about_us/about_us.html': {
            title: 'About Us',
            text: 'About Us. ' +
            'Smartexe is a global software consultancy firm. We deliver software engineering as a service to companies around the world. ' +
                'Founded in 2004, Smartexe has a solid management team that has set a clear target to help companies of any size solve problems of any complexity and scale. ' +
                'Our excellent team of specialists provide our customers across the globe with a wide range of service like Software Development, Project management, QA, Graphic design and more. Services that are applied to Web, Games and Mobile app development as well as Video & Audio streaming, embedded software and Blockchain platforms. ' +
                'Management. ' +
                'DR. NACHUM PANICH. FOUNDER, CHAIRMAN & PRESIDENT. Dr. Panich is the driving force behind Smart.exe. He has more than 30 year’s experience in running R&D and his primary areas of expertise are video compression/decompression techniques and video-over- IP streaming. Over the years, Dr. Panich acquired a vast range of skills in a variety of areas, including computer vision and object recognition, graphic processing, and DSP and PC systems. Dr. Panich holds an M.Sc. in Electronics from the Polytechnic University of Vinnitsa as well as a Masters in Computer Sytems Development and a Ph.D. in Computers and Automation Systems, both from the Polytechnic University of Kharkov. ' +
                'MICHAEL MAIZELS. CEO, SMARTEXE INC. US. Experienced C-Level Executive with the extensive knowledge in New Market Entry/Development Domestic and International markets, Fundraising, and Investments. Product and Offshore/On Shore Team Management with the focus in organizational efficiency. Featured on Voice of America broadcast to share advanced knowledge of international markets, global economics, brand positions, and cross-cultural education. Michael is carrying multidisciplinary graduate and post graduate degrees from University of Cincinnati, Harvard University, and St. Petersburg Conservatory of Music. ' +
                'EHUD ZAGURI. MANAGING DIRECTOR, SMARTEXE APS. EUROPE. Ehud is an entrepreneur at heart and a seasoned technology leader with rich experience running dozens of large scale projects. Ehud co-founded Rewardpod, a predictive analytics technology driven by big data, he founded CloudKafé, a personal cloud aggregation service, led the engineering team at Conduit and also ran a boutique software development house. Ehud holds a B.Sc. in Mathematics and Computer Science from Ben-Gurion university of the Negev. ' +
                'GENA PANICH. VP MARKETING. In his first executive role, Gena is making an imprint on the business world. He acquired his education in Israel, graduating from Tel-Aviv University’s prestigious Technological High School for Practical Engineers (Handasaim High School). Gena holds a B.Sc. in Applied Mathematics (Extended Track) from Bar-Ilan University. ' +
                'ANNA KOREBAN. VP SALES. As a young executive, Anna is responsible for the accounting and the customer relations at Smartexe. Anna has proven to be an important part of the company’s leadership; she keeps on bringing her fresh perspective and positive attitude to every challenge. Anna holds a B.A. in Psychology and Management from Tel-Aviv University. '
        },


        // ============= CONTACT US ==============
        '../contact_us/contact_us.html': {
            title: 'Contact Us',
            text: 'Contact Us. ' +
            'Send us a message. North America. USA, PA. Direct: +1 (215) 565-6150. Email: contact@smartexe.com. ' +
                'Europe. Aarhus, Denmark. Direct: +45 30485640. Email: contacteu@smartexe.com. '
        },


        // ============= TERMS OF USE ==============
        '../terms_of_use_privacy_policy/terms_of_use.html': {
            title: 'Terms of use',
            text: 'Terms of use. ' +
            'TERMS OF USE. Smart.exe Ltd. provides access to and use of this site (\'www. Smart.exe.com\') subject to the terms and conditions described below. Access to and use of this site implies the user’s acceptance to be legally bound by the following terms and the applicable laws, effective immediately upon first instance of access/use. Smart.exe Ltd. may change these terms at any time by posting changes online. The user should review these terms regularly to ensure compliance with any modification thereof. Continued use of this site after changes are posted implies agreement to be legally bound by these terms as updated and/or amended. Smart.exe Ltd. may also change or discontinue any aspect of the site at any time, including its content or features. ' +
            'Use of Smart.exe.com. Smart.exe Ltd.’s name and logo, and the texts contained in this site, are copyrighted material of Smart.exe Ltd. The site and all its contents, including but not limited to texts and pictures, are property of Smart.exe Ltd. All trademarks mentioned are property of their respective owners. Users may not copy, reproduce, republish, download, post, broadcast, transmit, make available to the public, or otherwise use this site\'s contents in any way except for their own personal, non-commercial use. Users also agree not to adapt, alter, or create a derivative work from any content except for their own personal, non-commercial use. Any other use of this site\'s contents requires the prior written permission of Smart.exe Ltd. ' +
            'The site is intended for use only for lawful purposes and in a way that does not infringe the rights of, restricts, or inhibits anyone else\'s use and enjoyment of this site. Any behavior by a user that inconveniences, embarrasses, or endangers other persons, or disrupts the normal exchange of information within the site, is strictly forbidden. Unauthorized use of this website may violate copyright, trademark, or other protective laws, and may lead to criminal charges. Smart.exe Ltd. reserves the right to monitor the use of this site and to terminate a specific user\'s use of it, if necessary. ' +
            'Disclaimers and Limitation of Liability. Site contents, whether they relate directly or indirectly Smart.exe Ltd., its products, and its services, or to third parties and/or their products and services are provided "AS IS" and on an "IS AVAILABLE" basis without any representations or any kind of warranty made (whether express or implied by law) to the extent permitted by law, including the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security, and accuracy. Under no circumstances will Smart.exe Ltd. be liable for any of the following losses or damages (whether such losses where foreseen, foreseeable, known, or otherwise): (a) loss of data; (b) loss of revenue or anticipated profits; (c) loss of business; (d) loss of opportunity; (e) loss of goodwill or injury to reputation; (f) losses suffered by third parties; or (g) any indirect, consequential, special, or exemplary damages arising from the use of this site regardless of the form of action. The use of the site is at user’s own risk and peril. ' +
            'Smart.exe Ltd. does not guarantee that functions contained in this site\'s content will be uninterrupted or error-free, that defects will be corrected, or that the site or the server that makes it available are free of viruses or bugs. This site may provide links to websites and access to content, products, and services from third parties. Smart.exe Ltd. is not responsible for the availability of, or contents provided on, third-party websites. Users are encourage to read those website’s privacy policies and related information prior to accessing them. Smart.exe Ltd. is not responsible for third-party content accessible through this site. Users shall bear in an exclusive manner all risks associated with the use of such content. Smart.exe Ltd. is not responsible for any loss or damages that the users may incur as a result of dealing with any third party. ' +
            'Downloads. Every care is taken to ensure that any files available for download from this site are free from viruses. However, Smart.exe Ltd. accepts no liability for the following losses or damages caused as a result of downloading files from this site: (a) loss of data; (b) loss of revenue or anticipated profits; (c) loss of business; (d) loss of opportunity; (e) loss of goodwill or injury to reputation; (f) losses suffered by third parties; or (g) any indirect, consequential, special or exemplary damages arising from the use of this site regardless of the form of action. Smart.exe Ltd. will also not be liable for any damage to the user’s system as a result of such download. ' +
            'General. If any of these terms are determined to be illegal, invalid or otherwise unenforceable by reason of the laws of any state or country in which these terms are intended to be effective, then to the extent and within the jurisdiction in which that term is illegal, invalid or unenforceable, it shall be severed and deleted from these terms and the remaining terms shall survive, remain in full force and effect, and continue to be binding and enforceable. These terms shall be governed by and interpreted in accordance with the laws of the State of Israel.'
        },


        // ============= PRIVACY POLICY ==============
        '../terms_of_use_privacy_policy/privacy_policy.html': {
            title: 'Privacy Policy',
            text: 'Privacy Policy. ' +
            'PRIVACY POLICY. In general, users of this website are not required to provide any information while browsing through it. However, there may be instances in which information will be requested. This information will be used for specific purposes, subject to the conditions below. Smart.exe reserves the right to modify or update these conditions at any time and without prior notice. ' +
            'Data Gathering and Use. Users may be invited to provide personal data (name, company, position, phone number, e-mail address, etc.) in order to allow Smart.exe to provide them with further information. This data is to be kept in confidence and used only for its intended purposes and exclusively by Smart.exe Ltd. It will not be shared or traded with, or transferred to, any third party. ' +
            'Survey Information. Smart.exe Ltd. may from time to time conduct online surveys to respond better to its customers’ needs. Participation in these surveys is completely voluntary. Any information obtained in this way will be treated confidentially. ' +
            'Log Files. Smart.exe Ltd. may collect user domain information in order to analyze patterns of use of the website. Data gathering is automatic and does not require any user-initiated action. Access to the site entails users’ unconditional consent to allow the collection of this information. ' +
            'Use of External Links. Smart.exe Ltd. is not responsible for any consequence derived from the use of links to external entities contained in this website. Users are encouraged to independently check the privacy policies and conditions of use of said websites.'
        },


        // ============= SITEMAP ==============
        '../sitemap/sitemap.html': {
            title: 'Sitemap',
            text: 'Sitemap. ' +
            'SITEMAP. HOME. Terms of Use; Privacy Policy ; /FB ; /IN ; /TW. ' +

            'EXPERTISE. Web Development  >> Download our case study: Cloud Kafé Case Study; Mobile Applications  >> Download our case study: Rounds Case Study; Video & Audio; Embedded free consultation; Games free consultation; QA Techniques  >> Download our whitepaper: Four Steps to Better Quality Assurance. ' +
            'SERVICES. Software Development  >> Download our case study: BookThingsToDo Case Study. Project Management  >> Download our whitepaper: Outsourcing Strategies for Every Business. Quality Assurance  >> Download our whitepaper: Four Steps to Better Quality Assurance. Product Management  >> Download our whitepaper: Outsourcing Strategies for Every Business. 2D/3D Graphic Design & Animation  >> Download our case study: Rounds Case Study. Cloud IT  >> Download our case study: Cloud Kafé Case Study. ' +
            'TECHNOLOGIES. Web  >> Download our case study: Cloud Kafé Case Study. Mobile  >> Download our case study: Rounds Case Study. Video & Audio. Games. Blockchain. Embedded. ' +
            'INDUSTRIES. Telecommunications  >> Download our whitepaper: Outsourcing Strategies for Every Business. Multimedia  >> Download our case study: Rounds Case Study. High-tech Software  >> Download our whitepaper: Outsourcing Strategies for Every Business. Games Development. E-Commerce  >> Download our case study: BookThingsToDo Case Study. Media & Marketing. Cloud Computing. Cryptocurrency. ' +
            'ABOUT US. OUR CLIENTS. CONTACT US. '
        },


        // ============= CLIENTS ==============
        '../clients/clients.html': {
            title: 'Our Clients',
            text: 'Our Clients. ' +
            'Our clients are our best ambassadors. We’re proud to have a growing family of recurring customers who appreciate our professional and cost-sensitive approach, speedy reaction, and flexible, inventive thinking. Their success is the most rewarding and apparent proof of our efficiency. ' +
            'Testimonials. ' +
            'CONDUIT. We engaged Smart.exe to develop our branded toolbar applications. Their professional workmanship resulted in innovative products that have already received millions of downloads from our App Marketplace. They delivered on time and, more importantly, their work blended smoothly with the other project elements. If you need a skilled team to enhance your R&D capabilities or to develop your future products, Smart.exe is a great example of an offshore force that delivers reliable quality. Dror Erez, CTO of Conduit. ' +
            'LINGUISTIC SYSTEMS. In our business, we are aware of the exact meaning of words. And the word that best describes Smart.exe’s collaboration with us is professionalism. They performed in an informed and skilled manner, which resulted in a high-quality product that was ready on time to be put into use. Smart.exe answered all our demands, and we can recommend this company as an all-around software expert. Boris Katsevman, Director of Software Development. ' +
            'BOOKTHINGS2DO. Smart.exe helped us realize our aim of providing our customers with an application that facilitates their remote interaction with us. They are also responsible for its maintenance. Their performance has greatly contributed to us being competitive in our market. We depend on our customers having a satisfactory online experience, and Smart.exe made this possible and profitable. Jonathan Uchenik, Co-Founder. ' +
            'APPETUDE. We contacted Smart.exe with regard to an application for our Internet website and for iOS mobile platforms. Smart.exe’s Internet and mobile capabilities provided us with a superb solution that enhances our clients’ customer experience and is both time-effective and profitable. Smart.exe’s contribution felt like an extension of our own efforts. We are glad to have worked with them. Mark Alayev, CEO. ' +
            'ACTUS. We employed the services of Smart.exe in the field of software development. We are much satisfied with the end result and with the experience of working with them in general. Their optimal workflow blended fully with our own structure and allowed us to develop the product profitably and in time. We definitely recommend working with Smart.exe to complement in-house capabilities. Raphael Renous, VP R&D. ' +
            'DISCOVER VIDEO. Smart.exe’s collaboration was found to be optimal in terms of target definition, end-product quality, and timeliness of execution. They do know the field we deal in. Moreover, they also help maintain and upgrade our product. We are very satisfied with the end result and with the cooperation process itself. Rich Mavrogeanes, CEO and President. ' +
            'ROUNDS. Smart.exe took the time to understand our expectations and define the entire project as if it was their own. The results speak for themselves. Dany Fishel, CEO. ' +
            'VIDEO CLARITY. It has been a pleasure working with such a knowledgeable company. They provide a good customer experience that translates into quality products and processes. Blake Homan, President. ' +
            'Our Clients. We’d be honored to add you to our growing list of clients – you’d be amongst great company. Have a look: '
        }
    };

    var title = false;

    $('#search-button').on('click', function (event) {
        event.preventDefault();
        $('#search-result').empty();

        var search = $('#search-input').val().toLowerCase();
        var result = [];
        var template = '';

        if (!title) {
            $('#search-result-title').append('<h3>Search results</h3>');
            title = true;
        }

        if (search.length !== 0) {
            if (!title) {
                $('#search-result-title').append('<h3>Search results</h3>');
                title = true;
            }

            for (var key in library) {
                var index = library[key].text.toLowerCase().indexOf(search);

                if (index >= 0) {
                    template += '' +
                        '<div class="search-block">' +
                        '<a class="search-link" href="' + key + '">' + library[key].title + '</a>' +
                        '<p>' +
                        '... <strong>' + search + '</strong>' + library[key].text.substr(index + search.length, 100) + ' ...' +
                        '</p>' +
                        '</div>';
                }
            }
        } else {
            $('#search-result-title').empty();
            title = false;

            template += '' +
                '<div class="search-block">' +
                '<p><strong>Please enter some keywords</strong></p>' +
                '</div>';
        }

        if (template === '') {
            template += '' +
                '<div class="search-block">' +
                '<p><strong>Your search yielded no results</strong></p>' +
                '<ul>' +
                '<li>Check if your spelling is correct.</li>' +
                '<li>Remove quotes around phrases to search for each word individually. bike shed will often show more results than "bike shed".</li>' +
                '<li>Consider loosening your query with OR. bike OR shed will often show more results than bike shed.</li>' +
                '</ul>' +
                '</div>';
        }

        $('#search-result').append(template);
    });

    if (localStorage.getItem('searchPhrase') !== null ) {
        $('#search-input').val(localStorage.getItem('searchPhrase'));
        $('#search-button').click();
        localStorage.clear('searchPhrase');
    }

});