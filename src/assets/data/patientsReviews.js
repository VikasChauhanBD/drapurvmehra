const patientsReviews = [
  {
    name: "Supreet Bedi",
    subReview:
      " Dr. Apurv Mehra is truly a blessing for our family. He has operated on several members of my family, including my father, and each time showed ",
    review:
      " Dr. Apurv Mehra is truly a blessing for our family. He has operated on several members of my family, including my father, and each time showed exceptional medical expertise along with genuine compassion and care. His calm nature, patience, and reassuring communication gave us great confidence during difficult moments. He treats patients and families with empathy and respect, and his people management skills are outstanding. The staff is also very kind, supportive, and professional. They take care of the entire process from admission to discharge, and one doesn't need to worry about anything. We are deeply grateful to Dr. Mehra and highly recommend him. ",
  },
  {
    name: "Jagdeep Singh",
    subReview:
      " I am extremely grateful to Dr. Apurva Mehra of Vidya Jeevan Clinic for his exceptional professionalism, skill, and compassion. He treated ",
    review:
      " I am extremely grateful to Dr. Apurva Mehra of Vidya Jeevan Clinic for his exceptional professionalism, skill, and compassion. He treated my mother for total knee replacement of both knees, which were in a critical condition, with remarkable care and precision. From the very first consultation through surgery and recovery, Dr. Mehra demonstrated not only medical excellence but also genuine empathy and patience. He took the time to explain every step clearly, addressed all our concerns, and ensured my mother felt confident and comfortable throughout the treatment journey. Thanks to his expertise and dedicated care, my mother's recovery has been smooth and her quality of life has improved significantly. Dr. Mehra is truly an outstanding doctor who combines deep knowledge with a humane approach. I highly recommend him to anyone seeking expert orthopedic care. I would also like to thanks his team member, Chetan, who had help us in even step from hospital admission till discharge and later for follow up visits. ",
  },
  {
    name: "Jagdeep Singh",
    subReview:
      " I'm extremely grateful for the care I received during my knee surgery from Dr. Apurv and his team. From the first consultation to ",
    review:
      " I'm extremely grateful for the care I received during my knee surgery from Dr. Apurv and his team. From the first consultation to post-op recovery, everything was handled with professionalism, kindness, and clear communication. The team was knowledgeable, attentive, and reassuring throughout the entire process. The surgery went smoothly, and my recovery has been better than I expected. I truly felt supported every step of the way. I couldn't be happier with the care I received. Highly recommend. ",
  },
  {
    name: "Sharadendu Srivastava",
    subReview:
      " The atmosphere of clinic is so positive & behavior of Dr. Mehra & team is so nice that a patient feels that he/she is in a very safe hands ",
    review:
      " The atmosphere of clinic is so positive & behavior of Dr. Mehra & team is so nice that a patient feels that he/she is in a very safe hands which helps in quicker recovery. I myself found myself in very comfortable position from day one. I will remain obliged to the team for the positive change in my life... THANK YOU. ",
  },
  {
    name: "Shivangi k",
    subReview:
      " Six months post surgery, and I still feel grateful every day. From the first consultation, all my fears and questions were met with patience and clarity ",
    review:
      " Six months post surgery, and I still feel grateful every day. From the first consultation, all my fears and questions were met with patience and clarity. The procedure itself felt safe and comfortable and the post-surgery care has been exceptional. After living with pain for 8 years, I finally remember how it feels to exist without it. I feel reborn, stronger than ever. Dr. Apurv and his entire team truly changed my life. Thank you every single one of you🥹. ",
  },
  {
    name: "Harminder Singh",
    subReview:
      " We visited Dr. Apurv around 7–8 years ago for my mother's knee ligament treatment. He explained the procedure clearly and guided us through ",
    review:
      " We visited Dr. Apurv around 7–8 years ago for my mother's knee ligament treatment. He explained the procedure clearly and guided us through every step with great care. His staff is also very supportive and friendly. Since then, I've recommended him to many people for orthopedic issues and have always received positive feedback. Highly recommended. ",
  },
  {
    name: "Ghansham Madnani",
    subReview:
      " If you are considering a Total Knee Replacement, I highly recommend Dr. Apurv Mehra. He is a master of his craft, and his care for his patients ",
    review:
      " If you are considering a Total Knee Replacement, I highly recommend Dr. Apurv Mehra. He is a master of his craft, and his care for his patients is evident from day one. I also want to specifically mention his team members—Mahender, Pankaj, and Chetan. They handled my coordination and recovery support with such professionalism and warmth. They ensured I felt supported every step of the way, from the hospital to my first steps at home. Thank you, Dr. Mehra and team, for giving me my mobility back. ",
  },
  {
    name: "Yogesh Kapoor",
    subReview:
      " Well experienced Dr Mehra examines their patients with patience and prescribe the medicines and process if required. The supportive staff is also ",
    review:
      " Well experienced Dr Mehra examines their patients with patience and prescribe the medicines and process if required. The supportive staff is also knowledgeable to handle the patients. Overall, the clinic is very good for any Orthopedics problems. Worth place for treatment. ",
  },
  {
    name: "S M",
    subReview:
      " Both I and my husband had consulted Dr. Apurv Mehta. He is brilliant at his craft and takes the time to explain the condition and cure ",
    review:
      " Both I and my husband had consulted Dr. Apurv Mehta. He is brilliant at his craft and takes the time to explain the condition and cure. The institute is amazing, and the team reflects his ethics. ",
  },
  {
    name: "Pranav",
    subReview:
      " Best Orthopedician. Thank you, Dr. Apurv Mehra sir. He examined me very thoroughly and took the time to explain everything in detail, which really ",
    review:
      " Best Orthopedician. Thank you, Dr. Apurv Mehra sir. He examined me very thoroughly and took the time to explain everything in detail, which really gave me confidence. I truly appreciate his attention to my recovery progress and his patience in answering all my questions throughout the treatment. Highly satisfied and grateful for his care. ",
  },
  {
    name: "Himanshu Sharma",
    subReview:
      " Such a gem of a guy he is. Sir explained the procedure clearly, addressed all my concerns patiently, and ensured a smooth recovery. ",
    review:
      " Such a gem of a guy he is. Sir explained the procedure clearly, addressed all my concerns patiently, and ensured a smooth recovery. The surgery was successful, and I felt confident and well cared for throughout the process. ",
  },
  {
    name: "Mohd Waseem",
    subReview:
      " I think's Dr. Apurv Mehra is one of the best orthopedics in Delhi because i suffer nearly 3 years in pain on my both arms due to lack of vitamin ",
    review:
      " I think's Dr. Apurv Mehra is one of the best orthopedics in Delhi because i suffer nearly 3 years in pain on my both arms due to lack of vitamin d3 but no one knows the real reason behind it but when i visit first time in Vidya Jeevan clinic sir Dr. Apurv Mehra diagnosed it in very first time and within week i got relief since then in my family and friend circles any body suffered from any orthopedic problems i highly recommend Vidya Jeevan clinic beat treatments best advise and an friendly behavior must visit. ",
  },
  {
    name: "Moksh Mehta",
    subReview:
      " Had a wonderful experience at Vidya Jeevan clinic. Dr. Apurv Mehra gave the diagnosis in a way easy to understand. The staff is professional ",
    review:
      " Had a wonderful experience at Vidya Jeevan clinic. Dr. Apurv Mehra gave the diagnosis in a way easy to understand. The staff is professional and the clinic was clean. It was a good experience. ",
  },
  {
    name: "Garima Joshi",
    subReview:
      " Doctor bhagwan ka roop hota hai - this truly holds true for Dr. Apurv Mehra. He performed my mother's (Kusum Nayyar) knee surgery with ",
    review:
      " Doctor bhagwan ka roop hota hai - this truly holds true for Dr. Apurv Mehra. He performed my mother's (Kusum Nayyar) knee surgery with such care and precision, but what touched us most was his continuous support post - surgery. Even weeks later, he kept checking in personally and guiding us with utmost compassion. His presence gave us positivity and comfort during a difficult time. We genuinely felt he was taking on our pain as his own. A special thank you also to his wonderful team - Mahender, Navin, and others - who were always just a call away. We are overwhelmed and deeply grateful. Thank you, Dr. Mehra, for being such a blessing. ",
  },
  {
    name: "Shashi Bhushan",
    subReview:
      " Dr. Apurv Mehra has been incredible in treating my moms knees. They took the time to carefully assess her condition and explained all the treatment ",
    review:
      " Dr. Apurv Mehra has been incredible in treating my moms knees. They took the time to carefully assess her condition and explained all the treatment options clearly. With their expertise and compassionate care, her recovery has been progressing well. We are truly thankful to Dr. Apurv Mehra and highly recommend him for anyone looking for excellent orthopedic care. ",
  },
  {
    name: "Tarun Kumar",
    subReview:
      " The entire staff from admission to discharge was incredibly supportive and professional, truly exceptional care. Thank you so much Dr. Apurv ",
    review:
      " The entire staff from admission to discharge was incredibly supportive and professional, truly exceptional care. Thank you so much Dr. Apurv Mehra sir You are very kind. ",
  },
  {
    name: "Vikram Singh",
    subReview:
      " Highly recommend Dr. Apurv Mehra sir. he is incredibly knowledgeable and attentive, creating a personalized treatment plan that has significantly ",
    review:
      " Highly recommend Dr. Apurv Mehra sir. he is incredibly knowledgeable and attentive, creating a personalized treatment plan that has significantly improved my mobility and reduced my pain. ",
  },
  {
    name: "Rajendra Borar",
    subReview:
      " A most patent friendly, most honest for his profession, round the clock availability, make him totally different from others. I my self and my wife ",
    review:
      " A most patent friendly, most honest for his profession, round the clock availability, make him totally different from others. I my self and my wife obliged to him till lifetime. ",
  },
  {
    name: "Gaurav Taneja",
    subReview:
      " Bankart repair, rotator cuff, lesion repair - I preferred the most simplest and yet most effective term called surrender like you do to god. Dr. Apurv ",
    review:
      " Bankart repair, rotator cuff, lesion repair - I preferred the most simplest and yet most effective term called surrender like you do to god. Dr. Apurv Mehra Sir is gods very own. My best wishes may you continue to do well - be in good health always and keep contributing to the mankind. Trust me, half of your problem is gone on your very first visit to his clinic; some really amazing takeaways for me for life. CHEERS BIG B 🎉😊. ",
  },
  {
    name: "Karan Nayyar",
    subReview:
      " I am writing to express my deepest gratitude for the exceptional care you provided to my mother during her recent knee replacement surgery. ",
    review:
      " I am writing to express my deepest gratitude for the exceptional care you provided to my mother during her recent knee replacement surgery. From our first consultation to her post-operative follow-ups, your professionalism, expertise, and compassion have been outstanding. ",
  },
  {
    name: "Mannat Deewan",
    subReview:
      " I am Mr. Pankaj Arora I am very happy to from vidya Jeevan clinic and Ease of Booking Check-in, Staff Friendliness, Doctor's Expertise ",
    review:
      " I am Mr. Pankaj Arora I am very happy to from vidya Jeevan clinic and Ease of Booking Check-in, Staff Friendliness, Doctor's Expertise & Communication, Clinic Environment, and Overall. Thank you so much sir and Vidya Jeevan team. ",
  },
  {
    name: "Saurabh Singh",
    subReview:
      " Under Dr. Apurv Mehra's ongoing care, the treatment of my ACL and PCL tear has been exemplary. His professionalism, precision, ",
    review:
      " Under Dr. Apurv Mehra's ongoing care, the treatment of my ACL and PCL tear has been exemplary. His professionalism, precision, and compassionate approach inspire confidence throughout my recovery. I wholeheartedly recommend him for superior orthopedic care. ",
  },
  {
    name: "Arun Jain",
    subReview:
      " Dr. Apurv Mehra and his entire team was amazing. I was very amazed by the behavior of the whole team, generally you don't get to see from doctors ",
    review:
      " Dr. Apurv Mehra and his entire team was amazing. I was very amazed by the behavior of the whole team, generally you don't get to see from doctors nowadays. Thank you for your wonderful time. You really changed my mind. ",
  },
  {
    name: "Arnav Kapoor",
    subReview:
      " Vidya Jeevan Clinic truly works with a strong Seva Bhav. The doctor listens patiently, explains everything clearly, and treats patients with genuine ",
    review:
      " Vidya Jeevan Clinic truly works with a strong Seva Bhav. The doctor listens patiently, explains everything clearly, and treats patients with genuine care and respect. You don't feel rushed - only supported. It feels like healing with humanity. Highly recommended. ",
  },
  {
    name: "AK",
    subReview:
      " Dr. Apurv Mehra is an exceptional orthopedic doctor. From the beginning, they were approachable, through, and took the time ",
    review:
      " Dr. Apurv Mehra is an exceptional orthopedic doctor. From the beginning, they were approachable, through, and took the time to explain my mom's condition and treatment options. Their expertise and genuine care made her recovery smooth and effective. I highly recommend Dr. Apurv Mehra for anyone needing orthopedic care. A big thanks to Dr.Mehra and his team🙏🏼🙏🏼. ",
  },
  {
    name: "Sumit Sagar",
    subReview:
      " Dr. Apurv Mehra actively listens and acknowledges patients' concerns, what more a patient needs? His positive attitude and way ",
    review:
      " Dr. Apurv Mehra actively listens and acknowledges patients' concerns, what more a patient needs? His positive attitude and way of talking helps a person a lot. My mother got her Bilateral Knee replacement done from sir only. And she is truly very happy and doing great now. All thanks to sir and his team 😊. Highly Recommended. ",
  },
  {
    name: "Jaanvi Guleria",
    subReview:
      " My visit to the orthopedist was incredibly positive. From the moment I stepped into the clinic, I was greeted warmly by the staff, creating a welcoming ",
    review:
      " My visit to the orthopedist was incredibly positive. From the moment I stepped into the clinic, I was greeted warmly by the staff, creating a welcoming atmosphere. The orthopedist was highly knowledgeable, taking the time to listen attentively to my concerns and thoroughly explain my diagnosis and treatment options. Their expertise and professionalism were evident throughout the consultation, instilling confidence in their recommendations. I left the appointment feeling reassured and well-informed, knowing that I was in capable hands. Overall, it was a commendable experience that exceeded my expectations. ",
  },
  {
    name: "Niyati Guleria",
    subReview:
      " My visit to the orthopedist was exceptional. From the moment I walked in, the staff was welcoming and efficient. The orthopedist was attentive ",
    review:
      " My visit to the orthopedist was exceptional. From the moment I walked in, the staff was welcoming and efficient. The orthopedist was attentive, knowledgeable, and wasted no time in diagnosing and resolving my issue. Their expertise was evident as they explained the treatment plan in clear detail, putting me at ease throughout the process. Within no time, my problem was addressed, and I left the clinic feeling relieved and grateful for the prompt and effective care I received. I highly recommend this orthopedist for anyone seeking quality medical attention. ",
  },
];

export default patientsReviews;
