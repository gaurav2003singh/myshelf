const nav = document.querySelector(".nav2");
const btn = document.querySelector(".icon");
const crossBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".menu");

btn.addEventListener("click", function () {
  if (nav.style.display === "none") {
    nav.style.display = "flex";
    crossBtn.style.display = "block";
    menuBtn.style.display = "none";
  } else {
    nav.style.display = "none";
    crossBtn.style.display = "none";
    menuBtn.style.display = "block";
  }
});

gsap.from(".edc", {
  scale: 0,
  delay: 0.5,
  duration: 1,

  scrollTrigger: {
    trigger: ".yellow",
    toggleActions: "play none none reverse",
  },
});


gsap.from(".icon-section img", {
    scale: 0,
    opacity: 0,
    y: 50, //moves up while apearing
    duration: 0.8,
    ease: "back.out(1.7)", //smooth bounce effect
    stagger: 0.2,  // icons appear one by one 
  
    scrollTrigger: {
      trigger: ".icon-section",
      start: "top 80%",   //Trigger when reaching 80% viewport
      toggleActions: "play none none reverse",
    },
  });
  

  gsap.to(".html", {
    width: "90%", // Set percentage width
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".icon-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });
  
  gsap.to(".css", {
    width: "80%",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".icon-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });
  
  gsap.to(".js", {
    width: "75%",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".icon-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });
  
  gsap.to(".react", {
    width: "50%",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".icon-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });
  gsap.to(".node js", {
    width: "10%",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".icon-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });
  
 

  
  