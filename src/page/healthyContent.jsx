import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from '../components/calendar';

const HealthyContent = () => {
    const [articleList, setArticleList] = useState([
        {
            "id": "2c5488c71a5131c0",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Artificial Sweetener Linked to Blood Clots, Heart Attacks: Study ",
            "subtitle": "A commonly used artificial sweetener called erythritol is strongly linked to a higher risk of heart attack and stroke, according to a new study.",
            "sourceName": "WebMD"
        },
        {
            "id": "ae9efb44829ed4ee",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Black women in childbearing years face higher blood pressure risks than white peers",
            "subtitle": "Black women in their childbearing years face double the risk for uncontrolled high blood pressure than white women, new research finds.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "0884eb6dafaed9c4",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "His heart stopped on a treadmill at the gym. His wife gave him CPR.",
            "subtitle": "Mark Wangrin of Austin, Texas, had a cardiac arrest while working out. After nine days in a coma, he woke up and got a defibrillator implanted in his chest.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "c5598120dd8d370f",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Take it from 2 runners whose hearts stopped during the same race: A heart-healthy lifestyle is best",
            "subtitle": "Greg Gonzales and Michael Heilemann couldn't outrun heart disease lurking in their genes, but their fitness helped save their lives and speed their recovery.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "5cec77ee00d51405",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Drug-Resistant Stomach Bug Infections on the Rise: CDC  ",
            "subtitle": "Health officials are warning that an increase in the drug-resistant form of the bacteria shigella is a âserious public health threat.â",
            "sourceName": "WebMD"
        },
        {
            "id": "992d832b70b009a5",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Exercise Is Top Treatment for Depression, Anxiety: Study ",
            "subtitle": "Exercise can be more effective than therapy or medication when treating depression and anxiety, according to researchers in Australia.",
            "sourceName": "WebMD"
        },
        {
            "id": "21aecb2c9fe18820",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " How Your Brain Helps You Cruise Through a Crowd ",
            "subtitle": "The brainâs grid cells help us track other peopleâs movements, scientists report. This could shed light on why some become disoriented in crowds.",
            "sourceName": "WebMD"
        },
        {
            "id": "35d4a7bac6485c35",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Daily Marijuana Use Now Linked to Heart Risks ",
            "subtitle": "Researchers say daily marijuana users are about one-third more likely to develop coronary artery disease, compared with people who have never used the drug.",
            "sourceName": "WebMD"
        },
        {
            "id": "1c6b6e10bfa68b25",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " How Doctors Can Care for Women Better ",
            "subtitle": "A recent movement in medicine is pushing doctors to better understand how female patients are different from male patients.",
            "sourceName": "WebMD"
        },
        {
            "id": "529c3bcb703e3b7f",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Extra 20 Minutes of Daily Exercise Cuts Hospitalization Risk: Study ",
            "subtitle": "An extra 20 minutes of moderate-to-vigorous exercise per day helps keep middle-aged and older people out of the hospital for serious medical conditions, a study published inÂ JAMA Open Network says.",
            "sourceName": "WebMD"
        },
        {
            "id": "750f6581e4244bf3",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " FDA Authorizes First At-Home Combo Test for COVID and Flu ",
            "subtitle": "The Food and Drug Administration has granted emergency use authorization for the at-home test Lucira as the first over-the-counter, test that detects both COVID-19 and influenza.",
            "sourceName": "WebMD"
        },
        {
            "id": "83d41f8cc0d6416d",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Next feat for doc who gave CPR to 2 runners in 1 race? Preventing more hearts from stopping.",
            "subtitle": "Dr. Steven Lome made headlines for his lifesaving feat at the Monterey Bay Half Marathon. In addition to promoting CPR and AEDs, he's using the platform to encourage others to adopt a heart-heathier lifestyle – like he did.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "49fe8859a8b411ed",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "The connection between menopause and cardiovascular disease risks",
            "subtitle": "As a woman transitions to menopause, her risk factors for cardiovascular disease rise, research shows.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "10994a5500510d9b",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " FDA Broadens Warning on Potentially Contaminated Eye Products ",
            "subtitle": "The agency says Delsam Pharmaâs Artificial Eye Ointment may be contaminated with bacteria.",
            "sourceName": "WebMD"
        },
        {
            "id": "25bca4ff592854cd",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Heart Attack Deaths Fell for Americans Over Past 20 Years ",
            "subtitle": "The gap in the rate of heart attack deaths between white people and Black people narrowed by nearly half.",
            "sourceName": "WebMD"
        },
        {
            "id": "1652348195d16cf5",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " FDA Says Plant-Based Drinks Can Still Be Called ‘Milk’ ",
            "subtitle": "Plant-based beverages can continue to be called âmilk,â according to newly proposed guidelines from the FDA.",
            "sourceName": "WebMD"
        },
        {
            "id": "758a7865c6301fcb",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Vaccination Reduces Post-COVID Heart Attack, Stroke Risk ",
            "subtitle": "In the largest and most diverse analysis to date, researchers have found that the risk of post-COVID heart attack or stroke was reduced by 41% in people who are fully vaccinated.",
            "sourceName": "WebMD"
        },
        {
            "id": "7b6b3b6cf0325af8",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " This Season’s Flu Shot Cut Hospitalization Risk in Half ",
            "subtitle": "The flu vaccine has been highly effective this year, the CDC says, despite flu season getting off to one of the earliest and strongest starts on record.",
            "sourceName": "WebMD"
        },
        {
            "id": "b40523eace1a04df",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Take it from Damar: Learning CPR is easy, quick and can save a life",
            "subtitle": "Damar Hamlin of the Buffalo Bills has issued the #3forHeart CPR Challenge, encouraging everyone to learn CPR so they can save a life, just like others did for him.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "029901c6d5508ae0",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Understanding the stroke-depression link – and what survivors and families can do",
            "subtitle": "Up to half of stroke survivors may experience depression at some point. Sen. John Fetterman's treatment is drawing attention to the issue.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "c65ffbe25c627028",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Active, healthy, pregnant … and in need of a new aortic valve",
            "subtitle": "Only after Erin Kidwell of Dallas passed out while running did she learn that giving birth to her third child could be life-threatening.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "c7ff795faa773077",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Give me a beet: Why this root vegetable should be on your plate",
            "subtitle": "Beets are full of color and nutrients that give them medicinal properties that could help fight diseases.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "8a017875e0fb2465",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "While home recovering from COVID-19, she saved her husband's life",
            "subtitle": "Mike Button of Palm Beach Gardens, Florida, went into cardiac arrest while working in his home office. His wife, Stephanie, saw it happen and quickly started CPR.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "3199bec7d446f8a0",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Much has been learned about long COVID – and much remains to be learned",
            "subtitle": "What causes long COVID, how to treat it, even what to call it – it's all still being sorted out, but researchers are beginning to unravel the potentially debilitating condition.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "cf91eb4f09c6e3a9",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Premenstrual Exacerbation: When Your Period Can Be Life-Threatening ",
            "subtitle": "What to know about premenstrual exacerbation.",
            "sourceName": "WebMD"
        },
        {
            "id": "05bf2383304dc714",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Air Pollution May Create U.S. 'Hot Spots' for Parkinson's Risk ",
            "subtitle": "A new study suggests people living in heavily polluted areas of the U.S. may be more vulnerable to Parkinsonâs disease.",
            "sourceName": "WebMD"
        },
        {
            "id": "c75835db2c095188",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " ‘Forever Chemicals’ Disrupt Biological Processes in Children: Study ",
            "subtitle": "Exposure to âforever chemicalsâ widely used in consumer products disrupts important biological processes in children and young adults, a new study says.",
            "sourceName": "WebMD"
        },
        {
            "id": "507e18d2b2a26e9b",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Irregular Sleep Tied to Increased Heart Disease Risk  ",
            "subtitle": "Irregular sleep, such as sleeping for an inconsistent number of hours each night or falling asleep at different times, may increase the risk of developing atherosclerosis, or the hardening of the arteries, among adults over age 45, a new study suggests.",
            "sourceName": "WebMD"
        },
        {
            "id": "4d16e2575ebb4dbf",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Weather Report: Cold, Then Hot, With Chance of a Runny Nose ",
            "subtitle": "Recent extreme swings in temperature and weather across the U.S. can trigger health issues for many people, such as allergies, infections, or worsened heart conditions.",
            "sourceName": "WebMD"
        },
        {
            "id": "44c7bf0e87488796",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Ultrasound Reduces Involuntary Movements of Parkinson’s Disease ",
            "subtitle": "In a clinical trial, a procedure using ultrasound and requiring no incisions successfully reduced a side effect of Parkinsonâs treatments known as dyskinesia, which is an involuntary movement of the body. The ultrasound also improved motor impairment in people with Parkinsonâs disease.",
            "sourceName": "WebMD"
        },
        {
            "id": "5095a348d2348473",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " New Screen Might Spot More Cases of Hidden COPD ",
            "subtitle": "Researchers report a questionnaire called CAPTURE successfully identified almost half of clinical trial participants who had moderate to severe forms of previously undiagnosed COPD.",
            "sourceName": "WebMD"
        },
        {
            "id": "ba5d4de2a0d410f8",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Switch to Plant-Based Diet Could Boost Prostate Cancer Survival ",
            "subtitle": "A new study suggests following a healthy plant-based diet after a diagnosis of prostate cancer may help prevent the disease from progressing or recurring.",
            "sourceName": "WebMD"
        },
        {
            "id": "90850da7aa94c87b",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Older Breast Cancer Patients Can Choose To Skip Radiation: Study ",
            "subtitle": "Older breast cancer patients can consider skipping weeks of grueling radiation therapy after lumpectomy surgery, a new study suggests.",
            "sourceName": "WebMD"
        },
        {
            "id": "12eba947a13e71ea",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "To make history, a major study on Black heart health looked beyond the lab",
            "subtitle": "The Jackson Heart Study has produced many insights on cardiovascular health, but before it could do so, it had to win the trust of Black men and women in Mississippi.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "5290167b7848a977",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Vaccination Could Reduce Risk of Long COVID, Study Shows ",
            "subtitle": "A study focusing on fatigue and other long COVID symptoms saw some differences in severity of symptoms based on COVID variants, but these differences became insignificant when researchers accounted for vaccination status. The lead researcher says this discovery suggests that vaccinations may lower the risk of long COVID.",
            "sourceName": "WebMD"
        },
        {
            "id": "b23d0d8689c0a161",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Low Blood Pressure After COVID-19: Why It Matters  ",
            "subtitle": "A lesser-known concern when recovering from COVID-19 is low blood pressure. Here's what to know.",
            "sourceName": "WebMD"
        },
        {
            "id": "028c86399a3857e6",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Paxlovid Doesn’t Increase Risk of Rebound COVID Infection: Study ",
            "subtitle": "People who took the antiviral Paxlovid to treat COVID-19 infections were not more likely to get back-to-back bouts of the virus, a new study shows.",
            "sourceName": "WebMD"
        },
        {
            "id": "f15e9e95816a7044",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Is $3.5 Million a Fair Price for a Lifesaving Gene Therapy?  ",
            "subtitle": "Here's why gene therapies are the most expensive drugs in the world âand how these groundbreaking treatments could severely strain our health care system.",
            "sourceName": "WebMD"
        },
        {
            "id": "61b34d48472f2628",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Fentanyl Test Strips Are Saving Lives, but They're Just the Start ",
            "subtitle": "The strips are simple to use and effective. When dipped in water that contains dissolved drug residue, the strips indicate immediately whether trace elements are contained in a substance, such as heroin, cocaine, or ecstasy.",
            "sourceName": "WebMD"
        },
        {
            "id": "17be39553f77365d",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Living Near Busy Road Could Raise Your Odds for Eczema ",
            "subtitle": "New research suggests the closer you live to traffic, the higher chances are that you could develop eczema.",
            "sourceName": "WebMD"
        },
        {
            "id": "164b1f3fc0badd0a",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": "  A Pill Could Help Tame Binge Drinking, Study Shows ",
            "subtitle": "A medicine used to treat people with severe alcohol disorders could also be helpful for others against binge drinking, a study says.",
            "sourceName": "WebMD"
        },
        {
            "id": "e3a329828d664555",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Heart problem could've ended his college basketball career before it began. It didn't.",
            "subtitle": "King McClure sought more information when doctors at Baylor University discovered he had hypertrophic cardiomyopathy. An ICD enabled him to keep playing.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "efc22ab832218706",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Older adults with irregular sleep patterns may face higher risk of hardened arteries",
            "subtitle": "Not sticking to a regular sleep schedule may raise the risk for atherosclerosis, a buildup of plaque that can lead to a heart attack or stroke, new research suggests.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "d27bb530cfb17cce",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Cutting Calories Could Slow the Pace of Aging: Study ",
            "subtitle": "Cutting calories by 25% slowed down the pace of aging in young and middle-aged adults by a few percentage points, compared to people who continued eating normally, new research reveals. This first-of-its-kind study in humans adds to evidence from animal studies that the rate of aging can be changed.",
            "sourceName": "WebMD"
        },
        {
            "id": "b580cea359ebe93c",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " COVID Vaccination Reduces Risk of Type 2 Diabetes After Infection ",
            "subtitle": "Vaccination appears to reduce the heightened risk of developing type 2 diabetes after a COVID-19 infection, according to a new study published in JAMA Network Open.",
            "sourceName": "WebMD"
        },
        {
            "id": "8ae79dab033cf2c8",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Exercise Training Reduces Liver Fat, Even Without Weight Loss ",
            "subtitle": "Exercise training can lead to a significant reduction in liver fat for patients with nonalcoholic fatty liver disease (NAFLD), which is a leading cause of liver disease worldwide, according to a new study published in the American Journal of Gastroenterology.",
            "sourceName": "WebMD"
        },
        {
            "id": "eb5404bec0faba7f",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Updated Booster Dramatically Reduces Risk of COVID Death: Study ",
            "subtitle": "A new CDC study shows that people who got the updated bivalent COVID-19 booster by the end of last year were 14 times less likely to die from the disease than people who were never vaccinated, and three times less likely to die from the disease than those who got only the original vaccines.",
            "sourceName": "WebMD"
        },
        {
            "id": "9f2f9b334f5576c5",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Children’s BMI Dropped After School Meals Became Healthier ",
            "subtitle": "The body mass index of school children dropped after the Health, Hunger-Free Kids Act of 2010 improved nutrition standards for school breakfasts, lunches, and snacks, a new study says.",
            "sourceName": "WebMD"
        },
        {
            "id": "4ae1f5f22ee82196",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Mom's exposure to air pollution, even before pregnancy, may raise baby's heart defect risk",
            "subtitle": "Maternal exposure to air pollution prior to pregnancy may be just as likely to increase the risk for heart defects in the unborn child as exposure during the first trimester, a study in China found.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "e4317e831b7b5694",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " What's Behind Rise in Girls' Report of Sadness, Sexual Violence? ",
            "subtitle": "Minority youth, as well as teens identifying as lesbian, gay, bisexual and questioning also frequently reported sadness, suicide risk, and sexual assault.",
            "sourceName": "WebMD"
        },
        {
            "id": "346764c6b90431c7",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Pancreatic Cancer Rates Rising Faster Among Women ",
            "subtitle": "Rates of pancreatic cancer are climbing the fastest among young women, particularly those who are Black.",
            "sourceName": "WebMD"
        },
        {
            "id": "57f71fab2499eb80",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Should You Skip Dark Chocolate This Valentine's Day? ",
            "subtitle": "Consumer Reports announced they'd tested 28 different dark chocolate bars -- and found lead and cadmium in every one of them.",
            "sourceName": "WebMD"
        },
        {
            "id": "f9033e0bead9864a",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Allergists Less Likely to Check Black Kids for Eczema ",
            "subtitle": "Researchers found that while Black children are more likely to develop asthma, theyâre less likely than white children to be evaluated for eczema by an allergist.",
            "sourceName": "WebMD"
        },
        {
            "id": "98644f2e08409b01",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Heart Disease, Stroke Linked To Specific Kinds of Sugars: Study ",
            "subtitle": "Itâs not necessarily the amount of sugar you eat that can hurt your heart, itâs the kind of sugar you eat that can lead to heart disease, a new study suggests.",
            "sourceName": "WebMD"
        },
        {
            "id": "3287ba0d6665fe98",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Eyedrops Could Prevent Nearsightedness in Kids ",
            "subtitle": "Atropine drops are used to relax eye muscles and dilate the pupils. Using a low concentration could prevent myopia, or nearsightedness, in children, says the research in the Journal of the American Medical Association.",
            "sourceName": "WebMD"
        },
        {
            "id": "cabde4f3c1750c4d",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "To improve maternal health, report says to start before pregnancy",
            "subtitle": "Optimizing pre-pregnancy health may help reverse the rise in heart-related maternal deaths and complications, especially among Black women, according to a new American Heart Association report.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "445bbf18f903429c",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " Expelled From High School, Alister Martin Became a Harvard Doc ",
            "subtitle": "Itâs not often that a high school brawl with gang members sets you down a path to becoming a Harvard-trained doctor. But thatâs exactly how Alister Martinâs life unfolded.",
            "sourceName": "WebMD"
        },
        {
            "id": "2070591c00de1c9a",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "Pro wrestler-in-training thrown for a loop by extra electrical pathway in her heart",
            "subtitle": "At 21, Megan Washington found out she had Wolff-Parkinson-White syndrome. Treatment fixed it, but she was still scared to work out. Now, she's engaged and back to regular exercise.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "28c4e93c3747ed5f",
            "source": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg",
            "title": "This is your brain on love",
            "subtitle": "Love and attraction stimulate the release of numerous hormones, which impact physical as well as emotional health.",
            "sourceName": "American Heart Association"
        },
        {
            "id": "dc27c6e21b21d730",
            "source": "https://upload.wikimedia.org/wikipedia/commons/4/42/WebMD_logo.png",
            "title": " You Have Cancer. Who in Your Life Do You Tell, and When?  ",
            "subtitle": "Are you considering having 'the talk?' Disclosing one's cancer status while dating or at work is a personal choice.",
            "sourceName": "WebMD"
        }
    ]);

    const handleChange = (event) => {

    }

    const getHealthyContentList = (event) => {
        axios({
            url: `https://api.contingentfitness.com/healthy-content-list`, //your url
            method: 'GET'
        }).then((res) => {
            setArticleList(res.data);
        });
    };

    useEffect(() => {
        // getHealthyContentList();
    }, []);

    return (
        <div className="bg-gray-100 dark:bg-slate-900 md:pt-10" >
            {articleList.map(data =>
                <div className="p-4">
                    <a href="#" class="flex flex-col items-center bg-gray-200 rounded-lg md:flex-row mx-0 md:mx-10 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-8" src={data.source} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.subtitle}</p>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}
export default HealthyContent;