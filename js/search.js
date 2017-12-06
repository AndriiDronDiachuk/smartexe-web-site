$(document).ready(function ($) {

    var library = {
        '../expertise/expertise_main.html': {
            title: 'Expertise',
            text: '' +
                'Web Development. As both a portal to your product and a means of communication with your customers, your website is a significant extension of your company identity. Let us help. ' +
                'Mobile Applications. A different world – a mobile world, a mobile life. No longer tied to their computers or workstations, help your customers connect to your world, wherever they are. ' +
                'Video & Audio. A classic way to communicate and entertain. New technology has made it cleaner and sharper than ever. ' +
                'Embedded. Consolidated technology, embedded technology. New developments have made the process easier, giving you more power and efficiency for the space available. ' +
                'Games. The video game industry has exploded with growth. From mobile phones to computer desktops, the choices are greater than they’ve ever been. ' +
                'QA Techniques. Release a well-developed, problem free product. Do it efficiently, and do it quickly. '
        },

        '../expertise/expertise_web_development.html': {
            title: 'Web Development',
            text: '' +
                'Our developers have experience crafting websites for clients within a variety of industries, from tourism to high-technology. We can generate pages based on any form of code, bringing your digital presence to life on any web-browser or mobile platform. Below, we’ve listed the various languages we’ll use to make your website the way you like. ' +
                'Front-end: • JavaScript; • ES6; • WebSockets; • Comet; • AJAX; • JSONP; • Server Side Even; • angular.js; • react.js; • async.js; • jQuery; • lodash.js; • underscore.j; • bootstrap.js; • chart.js; • json; • Yeoman; • Gulp.js; • Grunt; • HTML5; • CSS3; • Responsive Web Design; • SASS; • LESS; • Bootstrap.css. ' +
                'Back-end: • Node.js; • Express.js; • PHP (Symfony3, Zend); • Java; • ASP.NET; • C#; • C++; • Python. ' +
                'Databases: • MySql; • Oracle pl/sql; • MongoDb; • Redis; • PostgreSQL; • SQLite; • MSSQL. ' +
                'Social API: Google; • LinkedIn; • Facebook; • Dropbox; • Twitter. ' +
                'Our cases of study. BookThingsToDo Case Study. Cloud Kafé Case Study. '
        },

        '../expertise/expertise_mobile_applications.html': {
            title: 'Mobile Applications.',
            text: '' +
                'The mobile world is upon us. You, your employees, and your customers are all on the move – perhaps even as you read this. This calls for a new era of design, a new way of thinking. Your mobile applications and devices must be as responsive and stylish as the customers who use them. Whether you need help with your software or hardware, we’re ready to assist. We know, there’s an overwhelming variety of mobile hardware and operating systems. Don’t worry! We’ve got just as many skilled team members ready to handle the variety. Here are some areas we can help with: ' +
                'Applications: • Business-to-Business (B2B); • Client-Server; • Games and Entertainment; • Native Mobile; • PhoneGap, Xamarin, Marmalade SDK; • Special-Purpose Proprietary; • Social Networking. ' +
                'Operating Systems & Platforms: • Android; • iOS; • Windows Mobile; • Tizen. ' +
                'Our cases of study. Rounds Case Study. '
        },

        '../expertise/expertise_video_audio.html': {
            title: 'Video & Audio',
            text: '' +
                'A technology that has changed both our professional and personal lives, audio- and video-over-IP allows us to interact with each other in a way we may have never thought possible. Suddenly, distance is no limiting factor for communication. Executives stuck in Tokyo? This technology permits face-to-face communication with whoever we want, whenever we want.Regardless of your requirements, we’ve got you covered. Below, we’ve listed some of our specific capabilities and technologies: ' +
                'Main Direction for Video: • Preparation Video Content; • Streaming Engine; • CDN; • Delivery Content. ' +
                'Encoding/Decoding Standards & Tools: • H.264/AVC; • MPEG-1/2; • MJPEG; • WEBM; • AAC; • H.264/AVC Intel QSV; • MPEG; • MPEG-4; • WME; • FLV; • AC3. ' +
                'Streaming Protocols: • RTP; • RTMP; • MPEG-DASH; • RTSP; • HLS; • HDS. ' +
                'Streaming Engine: • WOWZA; • Restreaming; • Camera API; • nDVR; • Transcoder; • Java-based custom modules; • RED5; • ASTERISK; • SIP; • LIVE.555; • RTSP; • Web Sockets; • RTMP Flash; • Streaming. '
        },

        '../expertise/expertise_embedded.html': {
            title: 'Embedded',
            text: '' +
                'Embedded technology requires a number of things: concision, mobility, unity. We understand the role this technology plays in an increasingly electronic world. Our experts possess the ability to work within this framework, helping you to develop a platform that works in synchronization with its unified architecture. With embedded technology, the goal is to deliver a product, the value of which is greater than the sum of its parts. We’ll help you with the various procedures necessary to make that happen. ' +
                'We can help with each of the processes listed below: • SoC pre silicon model and post silicon validation; • Hardware bring up (different complexity): electronics fix, core and peripheral bring up; • BSP; • Various boot loader; • RTOS; • Multi-core and SMP; • Kernel, driver development and support; • Porting to different platforms; • Power management aspects; • Optimization and benchmarking; • Networking stack; • OS’s: Linux, Android, Nucleus, RexOS, QNX and other; • Automated and manual testin. '
        },

        '../expertise/expertise_games.html': {
            title: 'Games',
            text: '' +
                'Not just a way to pass the time, videogames have become a lifestyle, a true example of digital interaction at its most advanced stage. It’s no longer enough to bounce a ball back and forth across a screen. Modern users demand truly unique, beautiful experiences that offer fascinating and sometimes touching experiences. Our design teams have worked on a wide variety of creative projects, including mobile- and computer-based games. Using an extensive selection of tools, let us help you craft an epic experience for your customers. ' +
                'Here are just a few of the tools at our disposal: • Unity 2D/3D; • Cocos2d; • Adobe Flash; • Sketchbook Pro; • Face Robot; • Eon Vue; • IClone. '
        },

        '../expertise/expertise_qa_technology.html': {
            title: 'QA Techniques',
            text: '' +
                'Technology is such a dynamic creature. It requires constant attention to detail, constant problem-solving. We’re here to help you in your quest to eradicate glitches, bugs and imperfections. We’ve got the tools and expertise you need to develop a product exactly as you imagined it. Our QA teams are located at each of our research and development facilities throughout the world. Our VP of quality assurance orchestrates these teams in harmony to develop and troubleshoot a product you can be proud of. ' +
                'Here’s how we can help: • Functional Testing (both manual and automated); • Software Test Document (STD) creation; • Performance Testing; • Load testing; • Security testing; • Penetration testing; • Risk analysis. ' +
                'Our cases of study. Four Steps to Better Quality Assurance. '
        },

        '../service/service_main.html': {
            title: 'Service',
            text: 'Smart.exe serves as your technical partner, working with you to make your ideas a reality. ' +
            'We offer services that enable your company to succeed in a wide range of technical capacities. However, we never take on a project that we can’t execute to perfection. Our staff consists of talented professionals well-versed in the areas of product management, technical implementation and end-to-end project solutions. ' +
            'We are ready to take on projects in any of the following areas: ' +
            'Product Management. Here at Smart.exe, we understand that work on a product continues well after its release. Our product management team is ready to help you plan and implement different product lifecycle stages to ensure continued success. ' +
            'Project Management. Our teams possess solid leadership, communication and coordination skills, which help us manage projects on a global scale. We provide our clients with organization and efficiency, ensuring that projects are executed on-time and on-budget. ' +
            'Development. Your great idea is just the beginning. While designing and developing a new product, you’ve got to plan and examine a variety of industry factors. Through an extensive Research and Development process, we’ll help you obtain a high return on your investment. ' +
            '2D/3D Graphic Design & Animation. Design: it must be bold, eye-catching – and intuitive. Prefer simplicity? Or, perhaps – like some – you desire a more complex, stylistically flamboyant flavor to your designs. Either way, we can help make sure your vision meets function. ' +
            'Cloud IT. Virtualization is changing the IT industry. Cloud technology ensures software and data availability without expensive investments in hardware, and allows you to avoid significant maintenance costs. We offer a variety of cloud IT solutions for our clients. ' +
            'Quality Assurance. How can you ensure that your product lives up to your expectations and requirements? Our Quality Assurance team is here to help. We offer our clients QA solutions that are simple and thorough.'
        },

        '../service/service_product_management.html': {
            title: 'Product Management',
            text: '' +
            'At Smart.exe, we pair our extensive network of resources with a skilled product management team that follows your product throughout its entire lifecycle. The end-goal is to help you create a product that is exactly to specification, one that accurately reflects the original vision you had when you set out to build this product. ' +
            'Research. As an integral part of the development process, research and due diligence allows us to explore your product’s concept, its functional and architectural requirements, and to identify which tools we’ll need to help you realize it. ' +
            'Product Specification. We’ll make sure your product is designed exactly to its intended specification. The center of the entire production continuum, the product specification stage allows us to proceed efficiently with the product development cycle. ' +
            'Product Manager. To facilitate this process smoothly, we assign a highly-trained product manager to serve as liaison for all parties involved. Aside from keeping the product on-track, the manager will coordinate communications between you and the various teams working on the product. ' +
            'Specific Services: • Coordination with the client and with other Smart.exe teams; • High-level product requirement documentation (PRD); • Periodical product reviews and modifications; • Functional specifications (FRD); • Preliminary research; • Additional R&D. ' +
            'Out Whitepaper. Outsourcing Strategies for Every Business.'
        },

        '../service/service_project_management.html': {
            title: 'Project Management',
            text: '' +
            'Our project managers will provide you with a leader who will orchestrate the various tasks and resources involved in making your idea or project a reality. This project manager is here to keep your project on track, to unify a team or group of teams all working in harmony towards the completion of your project. ' +
            'Specific Services: • Coordination with external sources of products or services necessary for project implementation; • Coordination between various Smart.exe teams working on the same project; • Planning and organization of the required Smart.exe teams; • Task definition and allocation; • Time management; • Coordination with the client. ' +
            'Orchestration, Coordination. Our project manager is here to unify multiple teams, which may be located around the globe. We’ll work directly with you to define requirements of your specific project, then allocate resources as necessary to get the job done. ' +
            'Technical Background. We pledge to provide a leader with the technical background and expertise necessary to execute your specific plan – your project requires it. ' +
            'Out Whitepaper. Outsourcing Strategies for Every Business.'
        },

        '../service/service_development.html': {
            title: 'Software Development',
            text: '' +
            'If you need technical help developing a product, you’ve come to the right place. Here at Smart.exe, we’ll help with every phase of the development process, from planning to testing. Whether you’re missing that one developer to help make your dream software a reality, or if you’d rather focus your own talented staff elsewhere, we can provide the expertise you need to finish the job. ' +
            'Specific Services: • Software development: planning, implementation, testing, documentation, and deployment; • Prototyping and Proof of Concept; • Architectural design; • Client-server sites; • Offshore development. ' +
            'Skilled Specialists. From recent college graduates with fresh ideas to experienced developers with tried-and-true methods, our research and development centers are full of tech-savvy professionals. These engineers, developers, and testers – working in conjunction with your current staff – will serve as the creative force driving your idea to reality. ' +
            'Time Management. Here, we shoot for efficiency, for speed and precision – that’s why we’ll help you seamlessly integrate various development stages. Our teams are accustomed to operating under pressure and within a deadline-oriented environment. ' +
            'Out Whitepaper. BookThingsToDo Case Study.'
        },

        '../service/service_graphic_design.html': {
            title: '2D/3D Graphic design And Animation',
            text: '' +
            'Artists and creative teams no longer rely on the pencil and paintbrush of yesterday to craft a compelling picture or design. Though these tools still exist, they are joined now by an extensive digital creative suite to help make your dream a reality. ' +
            'Ideas. The fact of the matter: your design and creative team must be talented, visionary. You want somebody that can connect with your idea, or even help you develop it. Our teams can take direction, if necessary – if you’ve got an exact plan, we’ll carry it out. ' +
            'Creation. To execute your vision, we utilize talented individuals with powerful creative tools and the latest technologies at their disposal. If it can help us realize your vision, we know how to use it. ' +
            'Revision. Design is style, class and utility – evolving and ever changing. We understand, and we’ll help you evolve with the latest trends without sacrificing usability. ' +
            'Specific Strengths: • Adobe Flash, Photoshop, After Effects, and Premie; • Pixologic Zbrush; • Sketchbook Pro; • Unity 2D/3D; • Face Robot; • 3Ds Max; • 3D Coat; • Eon Vue; • IClone. ' +
            'Out Whitepaper. Rounds Case Study.'
        },

        '../service/service_cloud_it.html': {
            title: 'Cloud IT',
            text: '' +
            'Cloud technology: a new way of life, revolutionizing the way we store and access information on both a professional and personal level. With its advent, businesses have begun moving entire stores of data and programs into the virtual environment, giving them critical access anywhere, anytime. We’re here to help you make that transition, whether it means developing tools specifically for you, or simply advising you throughout the process. ' +
            'Reduced Costs. Moving to the cloud will save you a substantial amount of money in software and hardware costs. While living in the cloud-based virtual world, specific maintenance costs disappear; it’s no longer your problem, it’s the cloud provider’s. ' +
            'Variety. We haven’t invented every use for the cloud…yet. There are so many possibilities, and if we can’t provide you with a solution to suit your needs, we’ll develop one. ' +
            'Vision. Small or large, each company may have different cloud requirements. We want to help with your vision, providing elasticity, scalability, and service throughout the whole process. ' +
            'Specific Services: • Cloud configuration; • Cloud management; • Cloud migration; • Cloud optimization. ' +
            'Out Whitepaper. Cloud Kafé Case Study.'
        },

        '../service/service_quality_assurance.html': {
            title: 'Quality Assurance',
            text: '' +
            'Testing, troubleshooting, re-testing. You’ve developed a product. Does it work the way you want? What needs to change? We’d like to help you figure that out. With our quality assurance programs, we’ll provide you with an easy way to test your product. Whether your goal is to identify potential bugs and glitches, or if you’re looking to ensure compliance with various standards and regulations, we’ll arm you with the experienced QA team you need to deliver a solid product. ' +
            'QA Personnel. We staff each of our research and development centers with quality assurance personnel. These employees are unified under the vice president of QA, who serves as a link between you and our teams. ' +
            'Various Methodologies. We employ a wide-range of techniques to test and troubleshoot your product. Per your request, we can employ automatic or manual testing procedures, or both. ' +
            'Flexibility. The QA process is generally associated with a near-complete product, but may also be folded in throughout the product’s entire development. We offer the ability to combine this process with our other product management and development services. ' +
            'Specific Services: • Functional Testing (both manual and automated); • Software Test Document (STD) creation; • Performance testing; • Penetration testing; • Security testing; • Risk analysis; • Load testing. ' +
            'Out Whitepaper. Four Steps to Better Quality Assurance.'
        },

        '../industries/industries_multimedia.html': {
            title: 'Multimedia',
            text: '' +
            'We can help you develop your digital production into the masterpiece you imagine. Our multimedia experts possess a wide variety of editing equipment, which they can use to manipulate your feature however you’d like. ' +
            'While we can edit various raw video and audio, we can also develop and modify animations, whether it be for advanced computer programs, interactive web features, flash-based advertisements, etcetera. ' +
            'We can also seamlessly integrate our services, providing you with a consistent format throughout a series of products, whether they be web-based or on a disk. We’ll help you custom-tailor the experience for any format, or variety of formats. If it doesn’t work with a specific codec or within the context of your vision, we’ll fix it or start from scratch. ' +
            'Download Our Case Study. Rounds Case Study.'
        },

        '../industries/industries_mobile_applications.html': {
            title: 'Mobile Applications',
            text: '' +
            'We’ve got the capacity to conceive, program, and develop applications for all major mobile platforms, including iPhone, Android, and Windows Phone. We’re comfortable developing any kind of application, from mobile games to useful digital tools. ' +
            'In the event you’ve already mapped out exactly what you’d like to see in your mobile application, we’ll help you carry out the plan. Otherwise, we’re here to walk you through the entire process, from start to finish. ' +
            'But our job doesn’t end when we deliver the product. We’re pleased to offer continuing support for whatever application or group of applications we’ve helped you develop. Even if you’ve got an existing product, we’re happy to step in to help troubleshoot and enhance your applications. ' +
            'Download Our Case Study. Rounds Case Study'
        },

        '../industries/industries_telecommunication.html': {
            title: 'Telecommunication',
            text: '' +
            'Keeping in touch – we’ll help you do it, regardless of distance or time zone. By outsourcing your telecommunication through Smart.exe, you establish a global presence. Our teams, located throughout a variety of nations, will help you communicate around the clock, providing a local number for your foreign customers to call. ' +
            'By allowing us to handle your telecommunication, you’ll also gain a significant advantage: time to focus on your unique products and solutions. This keeps you rolling in an increasingly competitive economic climate. ' +
            'However, we can do more than field calls for you. We can also help you construct a strong telecomm foundation, whether through the internet, a cellular network, or the more traditional landline network. The goal is constant communication, and we can help with that. ' +
            'Download our whitepaper. Outsourcing Strategies for Every Business.'
        },

        '../industries/industries_web_server_client_applications.html': {
            title: 'Web Server/Client Applications',
            text: '' +
            'If you’ve got a large number of customers accessing your information, we’ve got the means to help them connect. We can setup various server functions, including telnet, e-mail, or web servers. Furthermore, our experts will help establish servers appropriately sized according to your specific business needs. We understand that each business is different, so let us fashion a custom solution to meet your unique needs. ' +
            'But the server is only one side of the equation. If you’re not serving the information, you’re accessing it. We can help with that, too. ' +
            'We’ll develop a solution, but we’ll also support you thereafter. We understand that you may run into problems down the line. In that case, we’re only a phone call away. Let us find a unique solution that works for you, then keep you working at peak efficiency.However, we can do more than field calls for you. We can also help you construct a strong telecomm foundation, whether through the internet, a cellular network, or the more traditional landline network. The goal is constant communication, and we can help with that.'
        },

        '../industries/industries_cloud_solutions.html': {
            title: 'Cloud Solutions',
            text: '' +
            'It seems you just can’t get away from this term. In fact, you’ve probably seen us talking about it all over this website; we only hope you realize how committed we are to this technology. ' +
            'If you’re looking to join the cloud, you’ve chosen a great starting point. The cloud provides a refreshing new way to access and control data, programs, and even remote workstations. You’ll also find a few other fringe benefits: efficiency, and cost savings. The majority of cloud-based providers charge on a pay-per-use structure, which will save you significant licensing and hardware fees. ' +
            'Even if you’re just looking to dip your toes into the growing cloud-based internet pool, we’ll hold your hand. You’ve got unique needs, we’ve got unique solutions.'
        },

        '../industries/industries_high_tech_sturtups.html': {
            title: 'High-Tech Startups',
            text: '' +
            'As a high-tech startup, you’re familiar with the challenges of developing and troubleshooting hardware and software that work correctly and seamlessly. As a highly technical business ourselves, we can offer some powerful tools, from our research and development centers to an extensive quality assurance process. ' +
            'Our experiences include: pre- and post-silicon chip development, systems integration, hardware bring-up of various complexity, multi- and single-core processor development and testing, and more. ' +
            'We can be as involved in your processes and development as you like. Feel free to contact us at any stage of development. ' +
            'Download our whitepaper. Outsourcing Strategies for Every Business.'
        },

        '../industries/industries_software_and_it.html': {
            title: 'Software & IT',
            text: '' +
            'Whether you’ve just begun your own company, or if you’ve been in the game for years, we can develop applications, programs and support solutions to meet your end-to-end needs. There are a variety of solutions available, but we want to make sure you find the perfect one. If it doesn’t exist, we’ll help create it. ' +
            'Develop. But it’s not enough to create a solution. We understand the implementation and roll-out stages are just as important, which is why our goal is hassle-free integration of your new systems and software. ' +
            'At Smart.exe, we also understand a company’s software and network are only as good as the support team behind them. As with any services, we’ll provide continuous support long-after you’ve grown accustom to your new systems. ' +
            'Download Our Case Study. Rounds Case Study.'
        },

        '../industries/industries_e_commerce.html': {
            title: 'E-Commerce',
            text: '' +
            'E-Commerce has become a standard in world-wide trade. With the advent of global communication comes little excuse to stay hidden from your customers and users. We’ve got the tools you need to develop and maintain a thorough e-commerce network wherever you’re located. ' +
            'Handle client access/serves. It’s important to develop a well-designed, functional website for your customers to find you and your products. Do to this, you may need a substantial server to handle large volumes of client connections. You may even want to outsource customer support. You may want any number of solutions to help your e-commerce strategy – the point is, regardless of your needs, we know we can help. ' +
            'With offices and locations throughout the world, we have the ability to help you network in a variety of places you may have never thought possible. Or, if you’d like to keep it local, we can help with that, too. ' +
            'Download Our Case Study. BookThingsToDo Case Study.'
        },

        '../about_us/about_us.html': {
            title: 'About Us',
            text: '' +
            'Smart.exe is a leading offshore services partner providing our clients with the resources they need to solve product - or process-related issues. ' +
            'We specialize in software design, development, integration, project management and product management. Our technology specialists are located throughout a worldwide network of R&D centers, ready to take on any challenge. ' +
            'Since 2004, we’ve worked with a variety of companies requiring high-tech, innovative solutions. We’ve helped companies of all sizes, from small start-ups to well-established enterprises. The verticals we serve are also diverse, and our expertise has grown over time to include scalable web technologies, mobile applications, product design, cloud technologies, and quality assurance. To put it concisely: we’ll pair your ideas with our technical expertise to help you and your company succeed. Whether we’re designing a product from the ground up or managing a project segment, our goal is to see both your ideas and your profits spring to life. ' +
            'Team. Our team is made up of professionals who possess impeccable credentials in their respective fields. Smart.exe is more than a group of experts; we are focused on helping companies bring their innovative ideas to the market – our staff is our greatest asset. ' +
            'Dr. Nachum Panich. Founder and CEO. Dr. Panich is the driving force behind Smart.exe. He has more than 30 year’s experience in the fields of academia, technology, and Research and Development. ' +
            'His previous positions include: • CTO and VP of R&D at VBox Communications; • Hardware Development Manager at Optibase Ltd.; • Management at Orbit Communication Systems Ltd. and Scitex Technologies Ltd. ' +
            'His primary areas of expertise are video compression/decompression techniques and video-over-IP streaming. Over the years, he’s acquired a vast range of skills in a variety of areas, including computer vision and object recognition, graphic processing, and DSP and PC systems. Dr. Panich holds an MSc degree in Electronics from the Polytechnic University of Vinnitsa as well as a Masters in Computer Sytems Development and a PhD in Computers and Automation Systems, both from the Polytechnic University of Kharkov. ' +
            'Ilana Volokh. VP of Quality Assurance. Ms. Volokh brings over 20 years of QA experience to the Smart.exe team. Her expertise ranges from procedures including test automation implementation to load and performance testing. Her skills include project and team management. She often builds and leads QA and technical support teams. Throughout her career, Ms Volokh has worked in diverse fields such as telephone and voicemail systems, personalized advertising, search and merchandising for e-commerce ventures, and content integration networks. ' +
            'Her previous positions include: • QA Manager at WebCollage Inc.; • Director of Technical Operations at Mercado Software Inc.; • QA Manager at Manna Inc. Mrs. Volokh holds an MSc degree in Applied Mathematics from Vilnius University. ' +
            'Roni Liberman. VP of Products. Mr. Liberman brings a unique set of product and project management skills to the Smart.exe team obtained throughout his 10 years in the field. He’s worked hands-on in mobile technology, telecommunications, Web, and cloud systems. ' +
            'His previous positions include: VP Product Planning and Director of Product Management at ELSE Ltd. Products Planning and Marketing Department Manager at Pelephone Communication Ltd. Mr. Liberman is also the owner of PronNovo, a company that offers consulting and product-management services to enterprises in the fields of telecommunications and Web. Mr. Liberman holds a BA in Business Administration from Open University in Israel. ' +
            'Anna Koreban. Administration and Marketing Manager. As a young executive, Mrs. Koreban brings a fresh perspective to Smart.exe. She was born in Ukraine and holds a B.A. in Psychology and Management from Tel-Aviv University. Mrs. Koreban is in charge of two very demanding departments: accounting and customer relations. ' +
            'Gena Panich. Customer Account Manager. In his first executive role, Mr. Panich is making an imprint on the business world. He was born in Ukraine and educated in Israel, graduating from Tel-Aviv University’s prestigious Technological High School for Practical Engineers (Handasaim High School). He holds a BSc in Applied Mathematics (Extended Track) from Bar Ilan University.'
        },

        '../contact_us/contact_us.html': {
            title: 'Contact Us',
            text: '' +
            'Israel 23, Bar Kochva st., 7th Floor, Bney Brak, Israel; Tel: +972-3-6133886; Fax: +972-3-6133887; Email: info@smartexe.com ' +
            'North America Cira Centre - Connected to Amtrak 30th Street Station,; 2929 Arch Street, Suite 1740, Philadelphia, PA 19104, USA; Direct: +1 (215) 948-8178; Fax: +1 (215) 712-1019; Email: info.north.america@smartexe.com ' +
            'West Europe Isis digital Ltd; 22 Majestic Apartments, King Edward Road Onchan, IM3 2BD, Isle of Man; Direct: +44 1624 679 398; Email: info.west.europe@smartexe.com ' +
            'Research and Development Centers: • Spilna Sprava Ltd., Vinnitsa, Ukraine; • iSource Ltd., Bitola, Macedonia. ' +
            'Contact Form. Its now easy to Contact Us.'
        },

        '../terms_of_use_privacy_policy/terms_of_use.html': {
            title: 'Terms of use',
            text: '' +
            'TERMS OF USE. Smart.exe Ltd. provides access to and use of this site (\'www. Smart.exe.com\') subject to the terms and conditions described below. Access to and use of this site implies the user’s acceptance to be legally bound by the following terms and the applicable laws, effective immediately upon first instance of access/use. Smart.exe Ltd. may change these terms at any time by posting changes online. The user should review these terms regularly to ensure compliance with any modification thereof. Continued use of this site after changes are posted implies agreement to be legally bound by these terms as updated and/or amended. Smart.exe Ltd. may also change or discontinue any aspect of the site at any time, including its content or features. ' +
            'Use of Smart.exe.com. Smart.exe Ltd.’s name and logo, and the texts contained in this site, are copyrighted material of Smart.exe Ltd. The site and all its contents, including but not limited to texts and pictures, are property of Smart.exe Ltd. All trademarks mentioned are property of their respective owners. Users may not copy, reproduce, republish, download, post, broadcast, transmit, make available to the public, or otherwise use this site\'s contents in any way except for their own personal, non-commercial use. Users also agree not to adapt, alter, or create a derivative work from any content except for their own personal, non-commercial use. Any other use of this site\'s contents requires the prior written permission of Smart.exe Ltd. ' +
            'The site is intended for use only for lawful purposes and in a way that does not infringe the rights of, restricts, or inhibits anyone else\'s use and enjoyment of this site. Any behavior by a user that inconveniences, embarrasses, or endangers other persons, or disrupts the normal exchange of information within the site, is strictly forbidden. Unauthorized use of this website may violate copyright, trademark, or other protective laws, and may lead to criminal charges. Smart.exe Ltd. reserves the right to monitor the use of this site and to terminate a specific user\'s use of it, if necessary. ' +
            'Disclaimers and Limitation of Liability. Site contents, whether they relate directly or indirectly Smart.exe Ltd., its products, and its services, or to third parties and/or their products and services are provided "AS IS" and on an "IS AVAILABLE" basis without any representations or any kind of warranty made (whether express or implied by law) to the extent permitted by law, including the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security, and accuracy. Under no circumstances will Smart.exe Ltd. be liable for any of the following losses or damages (whether such losses where foreseen, foreseeable, known, or otherwise): (a) loss of data; (b) loss of revenue or anticipated profits; (c) loss of business; (d) loss of opportunity; (e) loss of goodwill or injury to reputation; (f) losses suffered by third parties; or (g) any indirect, consequential, special, or exemplary damages arising from the use of this site regardless of the form of action. The use of the site is at user’s own risk and peril. ' +
            'Smart.exe Ltd. does not guarantee that functions contained in this site\'s content will be uninterrupted or error-free, that defects will be corrected, or that the site or the server that makes it available are free of viruses or bugs. This site may provide links to websites and access to content, products, and services from third parties. Smart.exe Ltd. is not responsible for the availability of, or contents provided on, third-party websites. Users are encourage to read those website’s privacy policies and related information prior to accessing them. Smart.exe Ltd. is not responsible for third-party content accessible through this site. Users shall bear in an exclusive manner all risks associated with the use of such content. Smart.exe Ltd. is not responsible for any loss or damages that the users may incur as a result of dealing with any third party. ' +
            'Downloads. Every care is taken to ensure that any files available for download from this site are free from viruses. However, Smart.exe Ltd. accepts no liability for the following losses or damages caused as a result of downloading files from this site: (a) loss of data; (b) loss of revenue or anticipated profits; (c) loss of business; (d) loss of opportunity; (e) loss of goodwill or injury to reputation; (f) losses suffered by third parties; or (g) any indirect, consequential, special or exemplary damages arising from the use of this site regardless of the form of action. Smart.exe Ltd. will also not be liable for any damage to the user’s system as a result of such download. ' +
            'General. If any of these terms are determined to be illegal, invalid or otherwise unenforceable by reason of the laws of any state or country in which these terms are intended to be effective, then to the extent and within the jurisdiction in which that term is illegal, invalid or unenforceable, it shall be severed and deleted from these terms and the remaining terms shall survive, remain in full force and effect, and continue to be binding and enforceable. These terms shall be governed by and interpreted in accordance with the laws of the State of Israel.'
        },

        '../terms_of_use_privacy_policy/privacy_policy.html': {
            title: 'Privacy Policy',
            text: '' +
            'PRIVACY POLICY. In general, users of this website are not required to provide any information while browsing through it. However, there may be instances in which information will be requested. This information will be used for specific purposes, subject to the conditions below. Smart.exe reserves the right to modify or update these conditions at any time and without prior notice. ' +
            'Data Gathering and Use. Users may be invited to provide personal data (name, company, position, phone number, e-mail address, etc.) in order to allow Smart.exe to provide them with further information. This data is to be kept in confidence and used only for its intended purposes and exclusively by Smart.exe Ltd. It will not be shared or traded with, or transferred to, any third party. ' +
            'Survey Information. Smart.exe Ltd. may from time to time conduct online surveys to respond better to its customers’ needs. Participation in these surveys is completely voluntary. Any information obtained in this way will be treated confidentially. ' +
            'Log Files. Smart.exe Ltd. may collect user domain information in order to analyze patterns of use of the website. Data gathering is automatic and does not require any user-initiated action. Access to the site entails users’ unconditional consent to allow the collection of this information. ' +
            'Use of External Links. Smart.exe Ltd. is not responsible for any consequence derived from the use of links to external entities contained in this website. Users are encouraged to independently check the privacy policies and conditions of use of said websites.'
        },

        '../sitemap/sitemap.html': {
            title: 'Sitemap',
            text: '' +
            'SITEMAP. HOME. Terms of Use; Privacy Policy ; /FB ; /G+ ; /IN ; /TW. ' +
            'EXPERTISE. Web Development  >> Download our case study: Cloud Kafé Case Study; Mobile Applications  >> Download our case study: Rounds Case Study; Video & Audio; Embedded free consultation; Games free consultation; QA Techniques  >> Download our whitepaper: Four Steps to Better Quality Assurance. ' +
            'SERVICE. Product Management  >> Download our whitepaper: Outsourcing Strategies for Every Business; Project Management  >> Download our whitepaper: Outsourcing Strategies for Every Business; Development  >> Download our case study: BookThingsToDo Case Study; 2D/3D Graphic Design & Animation  >> Download our case study: Rounds Case Study; Cloud IT  >> Download our case study: Cloud Kafé Case Study; Quality Assurance  >> Download our whitepaper: Four Steps to Better Quality Assurance. ' +
            'INDUSTRIES. Multimedia  >> Download our case study: Rounds Case Study; Mobile Applications  >> Download our case study: Rounds Case Study; Telecommunications  >> Download our whitepaper: Outsourcing Strategies for Every Business; Web Server/Client applications; Cloud Solutions; High-tech Start-ups  >> Download our whitepaper: Outsourcing Strategies for Every Business; Software & IT  >> Download our case study: Rounds Case Study; E-Commerce  >> Download our case study: BookThingsToDo Case Study. ' +
            'ABOUT US. OUR CLIENTS. CONTACT US.'
        },

        '../clients/clients.html': {
            title: 'Clients',
            text: '' +
            'Our clients are our best ambassadors. We’re proud to have a growing family of recurring customers who appreciate our professional and cost-sensitive approach, speedy reaction, and flexible, inventive thinking. Their success is the most rewarding and apparent proof of our efficiency. ' +
            'Our Testimonials. ' +
            'CLOUDKAFÉ. We chose to engage Smart.exe to develop our cloud application, and we are very happy with our decision. They were highly proficient and skilled with regard to the know-how required for software development. And they performed under a strained timeframe. We received a high-quality product without any down-time. Our experience with them throughout the project was more than positive. We give them high marks for understanding our requirements and making them their own. Ehud Zaguri, CloudKafé, Founder and CEO. ' +
            'CONDUIT. We engaged Smart.exe to develop our branded toolbar applications. Their professional workmanship resulted in innovative products that have already received millions of downloads from our App Marketplace. They delivered on time and, more importantly, their work blended smoothly with the other project elements. If you need a skilled team to enhance your R&D capabilities or to develop your future products, Smart.exe is a great example of an offshore force that delivers reliable quality. Dror Erez, CTO of Conduit. ' +
            'LINGUISTIC SYSTEMS. In our business, we are aware of the exact meaning of words. And the word that best describes Smart.exe’s collaboration with us is professionalism. They performed in an informed and skilled manner, which resulted in a high-quality product that was ready on time to be put into use. Smart.exe answered all our demands, and we can recommend this company as an all-around software expert. Boris Katsevman, Director of Software Development. ' +
            'BOOKTHINGS2DO. Smart.exe helped us realize our aim of providing our customers with an application that facilitates their remote interaction with us. They are also responsible for its maintenance. Their performance has greatly contributed to us being competitive in our market. We depend on our customers having a satisfactory online experience, and Smart.exe made this possible and profitable. Jonathan Uchenik, Co-Founder. ' +
            'APPETUDE. We contacted Smart.exe with regard to an application for our Internet website and for iOS mobile platforms. Smart.exe’s Internet and mobile capabilities provided us with a superb solution that enhances our clients’ customer experience and is both time-effective and profitable. Smart.exe’s contribution felt like an extension of our own efforts. We are glad to have worked with them. Mark Alayev, CEO. ' +
            'ACTUS. We employed the services of Smart.exe in the field of software development. We are much satisfied with the end result and with the experience of working with them in general. Their optimal workflow blended fully with our own structure and allowed us to develop the product profitably and in time. We definitely recommend working with Smart.exe to complement in-house capabilities. Raphael Renous, VP R&D. ' +
            'DISCOVER VIDEO. Smart.exe’s collaboration was found to be optimal in terms of target definition, end-product quality, and timeliness of execution. They do know the field we deal in. Moreover, they also help maintain and upgrade our product. We are very satisfied with the end result and with the cooperation process itself. Rich Mavrogeanes, CEO and President. ' +
            'ROUNDS. Smart.exe took the time to understand our expectations and define the entire project as if it was their own. The results speak for themselves. Dany Fishel, CEO. ' +
            'VIDEO CLARITY. It has been a pleasure working with such a knowledgeable company. They provide a good customer experience that translates into quality products and processes. Blake Homan, President. ' +
            'Our Clients. We’d be honored to add you to our growing list of clients – you’d be amongst great company. Have a look: ' +
            'We’d be honored to add you to our growing list of clients – you’d be amongst great company. Have a look: ' +
            'Actus; Appetude; Araneo; B-Obvious; Things2Do; Chooz On; Click\'n Goal; Cloud Kafe; Conduit; Discover Video; Elbit Systems; Elrom; Emblaze; Exatel; MIPSO; Natural Intelligence; NG Soft; Optibase; Peer TV; Rounds; Screen Peaks; Seraphim Organics; Surf; TandemG; Vcodes; Video Clarity; VIGILANT; ZX; Linguistic Systems; Wochit; KU;; ClearOne; Safet; WebTeb; GreenFieldTech; Ozvision; Proxy Network; TheNeedle.'
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