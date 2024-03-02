import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    resources: {
        en: {
            translation: {
                Home: "Home",
                Benefits: "Benefits",
                OurClasses: "Our Classes",
                ContactUs: "Contact Us",
                SignIn: "Sign In",
                BecomeMember: "Become Member",
                JoinNow: "Join Now",
                LearnMore: "Learn More",
                HomePageText: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.",
                BenefitPageTitle: "MORE THAN JUST GYM",
                BenefitPageTexts: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.",
                Benefit1Title: "State of the Art Facilities",
                Benefit1Texts: "Train in a modern and well-equipped gym with the latest equipment and technology.",
                Benefit2Title: "100's of Diverse Classes",
                Benefit2Texts: "Find a class that fits your interests and goals, from high-intensity workouts to yoga and pilates.",
                Benefit3Title: "Expert and Pro Trainers",
                Benefit3Texts: "Get personalized guidance and support from experienced and certified trainers who can help you reach your full potential.",
                BenefitPageSemititle: "MILLIONS OF HAPPY MEMBERS GETTING",
                Fit: "FIT",
                BenefitTestimonyText1: "The workouts were challenging but always engaging, and the supportive community kept me motivated even on tough days. This experience has completely changed my perspective on health and fitness. I'm excited to see what new goals I can conquer, and I'm grateful for the program for giving me the tools and confidence to reach them.",
                BenefitTestimonyText2: "Not only did I shred 15 pounds, but I also built unexpected muscle definition and discovered a newfound love for running. Now, I wake up with a spring in my step, my sleep is deeper, and I can finally keep up with my kids on their bike rides.",
            }
        },
        kiny: {
            translation: {
                Home: "Ahabanza",
                Benefits: "Inyungu",
                OurClasses: "Ibyiciro",
                ContactUs: "Tuvugishe",
                SignIn: "Injira",
                BecomeMember: "Ba Umunyamuryango",
                JoinNow: "Twiyungeho",
                LearnMore: "Menya Ibindi",
                HomePageText: "Ahakorerwa imyitozo ngororamubiriri hakataraboneka. Imyitozo yagufasha kugira imiterere myiza yumubiri. Turagufasha kugera ku nzozi zo kugira ubuzima buzira umuze.",
                BenefitPageTitle: "IBIRENZEHO",
                BenefitPageTexts: "Dufite abatoza binzoberere, ahantu haboneye wakorera imyitozo ndetse n'ibikoresho bya siporo bigufasha kugira ubuzima bwiza no kugera ku ntego yawe mu bijyanye n'imyitozo ngororamubiri ku buryo bukoroheye. Mu tugane tubakirane yombi, mwese muhawe ikaze.",
                Benefit1Title: "Ibikoresho by'umwuga",
                Benefit1Texts: "Kora imyitozo ukoresheje ibikoresho bigezweho kandi byiza hamwe n'ikoranabuhahanga rya none.",
                Benefit2Title: "Ibihumbi N'ibihumbi by'ibyiciro",
                Benefit2Texts: "Hitamo icyiciro wishimiye kandi gihwanye n'inzozi zawe, yaba imyitozo ihambaye muri yoga ndetse niyagufasha kumva umerewe neza.",
                Benefit3Title: "Abatoza binzobere kandi bashoboye",
                Benefit3Texts: "Gufasha mu gukomeza kubona inama zatuma ugera ku ntego yawe z'abatoza b'umwuga babiherewe imyamyabushobozi kandi babizobereye.",
                BenefitPageSemititle: "ABANYAMURYANGO MILIYONI BISHIMIRA KUGIRA",
                Fit: "UMUBIRI URINGANIYE",
                BenefitTestimonyText1: "Imyitozo yabanje kugorana ariko itarambirana, ndetse abari bashinzwe kudufasha bagahora badutera umurava iyo twabaga twacitse inege cyangwa turi mu bihe bitari bitworoheye. Ibyo byanyongereye ubunararibonye muri siporo ndetse bihindura ubuzima bwanjye ndetse umubiri wagize ubuzima bwiza. Nishimiye kubona haribyo nakora nkagera ku ntego yanjye, kandi nejejwe no kuba iyi gahunda yaramaye ibikoresho n'icyizere byatumye mbigeraho ",
                BenefitTestimonyText2: "Usibye kuba narabashije kugabanukaho ibiro birenga 15, nubatse umubiri wanjye kuburyo byatumye mbona izindi mbaraga zankundishije siporo yo kwiruka. None ubu, mbyuka mfite imbaraga n'umurava, kandi mba nasinziriye neza, kuburyo ubu mbasha kugendana n'abana banjye batwaye amagare yabo kandi ntibansige.",
            }
        },
        fren: {
            translation: {
                Home: "Accueil",
                Benefits: "Avantages",
                OurClasses: "Nos Cours",
                ContactUs: "Contactez-nous",
                SignIn: "Se Connecter",
                BecomeMember: "Devenir Membre",
                JoinNow: "Rejoindre Maintenant",
                LearnMore: "En Savoir Plus",
                HomePageText: "Gym inégalée. Cours de fitness inégalés. Studios de classe mondiale pour obtenir la forme corporelle dont vous rêvez. Obtenez votre corps de rêve dès maintenant.", 
                BenefitPageTitle: "PLUS QU'UN SIMPLE GYM",
                BenefitPageTexts: "Nous fournissons des équipements de fitness, des entraîneurs et des cours de classe mondiale pour vous aider à atteindre vos objectifs de fitness ultimes en toute simplicité. Nous portons une attention particulière à chacun de nos membres.",
                Benefit1Title: "Installations de Pointe",
                Benefit1Texts: "Entraînez-vous dans une salle de sport moderne et bien équipée avec les derniers équipements et technologies.",
                Benefit2Title: "Des Centaines de Cours Diversifiés",
                Benefit2Texts: "Trouvez un cours qui correspond à vos intérêts et objectifs, des entraînements intensifs au yoga et pilates.",
                Benefit3Title: "Entraîneurs Experts et Professionnels",
                Benefit3Texts: "Obtenez des conseils personnalisés et un soutien de la part d'entraîneurs expérimentés et certifiés qui peuvent vous aider à atteindre votre plein potentiel.",
                BenefitPageSemititle: "DES MILLIONS DE MEMBRES HEUREUX OBTIENNENT",
                Fit: "EN FORME",
                BenefitTestimonyText1:"Les entraînements étaient stimulants mais toujours captivants, et la communauté solidaire me maintenait motivé même les jours difficiles. Cette expérience a complètement changé ma perspective sur la santé et le fitness. Je suis impatient de voir quels nouveaux objectifs je peux atteindre, et je suis reconnaissant pour le programme de me donner les outils et la confiance pour les atteindre.",
                BenefitTestimonyText2:"Non seulement j'ai perdu 15 livres, mais j'ai aussi développé une définition musculaire inattendue et découvert un nouvel amour pour la course. Maintenant, je me réveille avec un pas sautillant, mon sommeil est plus profond, et je peux enfin suivre mes enfants lors de leurs balades à vélo.",
            }
        },
    }
})

export default i18n