let langEl = document.querySelector(".langwrap");
let link = document.querySelectorAll("a");
let aboutEl = document.querySelector(".aboutNav");
let servicesEl = document.querySelector(".serviceNav");
let techoEl = document.querySelector(".techoNav");
let methodoloEl = document.querySelector(".methodoloNav");
let landH1 = document.querySelector(".landH1");
let landParag = document.querySelector(".landParag");
let aboutHead = document.querySelector(".aboutHead");
let aboutParag = document.querySelector(".aboutParag");
let serveHead = document.querySelector(".serveHead");
let servH1 = document.querySelector(".servH1");
let servH2 = document.querySelector(".servH2");
let servParag = document.querySelector(".servParag");
let techHead = document.querySelector(".techHead");
let techoH1 = document.querySelector(".techoH1");
let techoH2 = document.querySelector(".techoH2");
let techoH3 = document.querySelector(".techoH3");
let techoH4 = document.querySelector(".techoH4");
let techoH5 = document.querySelector(".techoH5");
let techoH6 = document.querySelector(".techoH6");
let methodoHead = document.querySelector(".methodoHead");
let paragMethodo1 = document.querySelector(".paragMethodo1");
let paragMethodo2 = document.querySelector(".paragMethodo2");
let paragMethodo3 = document.querySelector(".paragMethodo3");
let address = document.querySelector(".address");
let rights = document.querySelector(".rights");




link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        let attr = el.getAttribute('language');

        
        aboutEl.textContent = data[attr].aboutNav;
        servicesEl.textContent = data[attr].serviceNav;
        techoEl.textContent = data[attr].techoNav;
        methodoloEl.textContent = data[attr].methodoloNav;
        landH1.textContent = data[attr].landH1;
        landParag.textContent = data[attr].landParag;
        aboutHead.textContent = data[attr].aboutHead;
        aboutParag.textContent = data[attr].aboutParag;
        serveHead.textContent = data[attr].serveHead;
        servH1.textContent = data[attr].servH1;
        servH2.textContent = data[attr].servH2;
        servParag.textContent = data[attr].servParag;
        techHead.textContent = data[attr].techHead;
        techoH1.textContent = data[attr].techoH1;
        techoH2.textContent = data[attr].techoH2;
        techoH3.textContent = data[attr].techoH3;
        techoH4.textContent = data[attr].techoH4;
        techoH5.textContent = data[attr].techoH5;
        techoH6.textContent = data[attr].techoH6;
        methodoHead.textContent = data[attr].methodoHead;
        paragMethodo1.textContent = data[attr].paragMethodo1;
        paragMethodo2.textContent = data[attr].paragMethodo2;
        paragMethodo3.textContent = data[attr].paragMethodo3;
        address.textContent = data[attr].address;
        rights.textContent = data[attr].rights;



        if(attr === "Arabic"){
          document.dir = "rtl"
        }else{
          document.dir = "ltr"
        }
    })
})




var data = {
             "english": 
             {
                "aboutNav": "About",
                "serviceNav": "Services",
                "techoNav": "Technologies",
                "methodoloNav": "Methodologies",
                "landH1" : "Hallo",
                "landParag": "We are - FalcoSoft  software and application development services",
                "aboutHead": "About",
                "aboutParag": "We provide Software & Apps Development services covering clients worldwide.Committed to deliver Software Systems & App Solutions that are: Secure, Robust, Fit for purpose , Scalable while Adopting industry standards, latest technologies & best practices.",
                "serveHead": "Services",
                "servH1": "Server side | Backend Development",
                "servH2": "Client side | Frontend Developemt",
                "servParag": "Web & Mobile",
                "techHead": "Technologies",
                "techoH1" : "lient side | Frontend Web",
                "techoH2" : "Client side | Frontend Mobile",
                "techoH3" : "Server side | Backend",
                "techoH4" : "Databases SQL",
                "techoH5" :"Databases NoSQL",
                "techoH6" : "Infrastructure Amazon Web Services",
                "methodoHead": "Methodologies",
                "paragMethodo1":"Reccomended for corporate & enterprise clients",
                "paragMethodo2":"Recommneded for startups and small to medium businesses",
                "paragMethodo3":"Best approach",
                "address":"Box 2929, Rihanna Bint Zayed, Al-Arid District, Riyadh",
                "rights":" 2023 FalcoSoft All Right Reserved",
             },
              "Arabic":
              {
                "aboutNav": "من نحن",
                "serviceNav":"الخدمات",
                "techoNav": "التقنيات",
                "methodoloNav": "المنهجيات",
                "landH1" : "مرحبا",
                "landParag": "نحن فالكو سوفت للبرمجيات وخدمات تطوير التطبيقات",
                "aboutHead": "من نحن",
                "aboutParag":" نقدم خدمات تطوير البرامج والتطبيقات التي تغطي العملاء في جميع أنحاء العالم. ملتزمون بتقديم أنظمة البرمجيات وحلول التطبيقات التي هي: آمنة وقوية ومناسبة للغرض وقابلة للتطوير مع اعتماد معايير الصناعة وأحدث التقنيات وأفضل الممارسات.",
                "serveHead": "الخدمات",
                "servH1": "جانب الخادم-تطوير الواجهه الخلفيه",
                "servH2": "جانب العميل-تطوير الواجهه الاماميه",
                "servParag": "موقع وجوال",
                "techHead": "التقنيات",
                "techoH1" : "جانب العميل-الواجهه الاماميه للموقع",
                "techoH2" : "جانب العميل-الواجهه الاماميه للجوال",
                "techoH3" : "جانب الخادم-الواجهه الخلفيه",
                "techoH4" : "SQL قواعد بيانات",
                "techoH5" :"NoSQL قواعد بيانات",
                "techoH6" : "خدمات أمازون ويب البنية التحتية",
                "methodoHead": "المنهجيات",
                "paragMethodo1":"موصى به لعملاء الشركات والمؤسسات",
                "paragMethodo2":"مستحسن للشركات الناشئة والشركات الصغيرة والمتوسطة",
                "paragMethodo3":"أفضل نهج",
                "address":"2525 ريحانا بنت زايد حي العارض الرياض",
                "rights":"2023 فالكوسوفت جميع الحقوق محفوظة",
              },
}