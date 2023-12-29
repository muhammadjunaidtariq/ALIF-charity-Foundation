
// toggle sidebar on small screens
function toggleMenu() {
  let selectedMenuItem = document.getElementById("toggleMenuBar");
  selectedMenuItem.classList.toggle("hidden");
}

//to change shadow and bg of header
function changeHeaderBg() {
  let bgHeader = document.getElementById("headerTag");
  let animationLogo = document.getElementById("foundation-logo");
  let navLink = document.getElementById("nav-link");
  let menuIcon = document.getElementById("menuIcon");
  let loginButton = document.getElementById("loginButton");
  if (scrollY > 40) {
    bgHeader.classList.replace("shadow-none", "shadow-xl");
    bgHeader.classList.replace("bg-transparent", "bg-white");
    animationLogo.classList.replace("text-white", "text-black");
    navLink.classList.replace("text-white", "text-[#727B9D]");
    loginButton.classList.replace("text-white", "text-[black]");
    menuIcon.classList.replace("text-white", "text-black");
  } else {
    bgHeader.classList.replace("shadow-xl", "shadow-none");
    bgHeader.classList.replace("bg-white", "bg-transparent");
    animationLogo.classList.replace("text-black", "text-white");
    navLink.classList.replace("text-[#727B9D]", "text-white");
    loginButton.classList.replace("text-[black]", "text-white");
    menuIcon.classList.replace("text-black", "text-white");
  }
}

function toggleDropdown() {
  let a = document.getElementById("smallScreenDropdown");
  a.classList.toggle("hidden");
  a.classList.toggle("flex");
}
function toggleDropdown2() {
  let b = document.getElementById("smallScreenDropdown2");
  b.classList.toggle("hidden");
  b.classList.toggle("flex");
}

function toggleDropdown3() {
  let c = document.getElementById("smallScreenDropdown3");
  c.classList.toggle("hidden");
  c.classList.toggle("flex");
}

function select(config) {
  return {
    data: config.data,

    emptyOptionsMessage:
      config.emptyOptionsMessage ?? "No results match your search.",

    focusedOptionIndex: null,

    name: config.name,

    open: false,

    options: {},

    placeholder: config.placeholder ?? "Select an option",

    search: "",

    value: config.value,

    closeListbox: function () {
      this.open = false;

      this.focusedOptionIndex = null;

      this.search = "";
    },

    focusNextOption: function () {
      if (this.focusedOptionIndex === null)
        return (this.focusedOptionIndex = Object.keys(this.options).length - 1);

      if (this.focusedOptionIndex + 1 >= Object.keys(this.options).length)
        return;

      this.focusedOptionIndex++;

      this.$refs.listbox.children[this.focusedOptionIndex].scrollIntoView({
        block: "center",
      });
    },

    focusPreviousOption: function () {
      if (this.focusedOptionIndex === null)
        return (this.focusedOptionIndex = 0);

      if (this.focusedOptionIndex <= 0) return;

      this.focusedOptionIndex--;

      this.$refs.listbox.children[this.focusedOptionIndex].scrollIntoView({
        block: "center",
      });
    },

    init: function () {
      this.options = this.data;

      if (!(this.value in this.options)) this.value = null;

      this.$watch("search", (value) => {
        if (!this.open || !value) return (this.options = this.data);

        this.options = Object.keys(this.data)
          .filter((key) =>
            this.data[key].toLowerCase().includes(value.toLowerCase())
          )
          .reduce((options, key) => {
            options[key] = this.data[key];
            return options;
          }, {});
      });
    },

    selectOption: function () {
      if (!this.open) return this.toggleListboxVisibility();

      this.value = Object.keys(this.options)[this.focusedOptionIndex];

      this.closeListbox();
    },

    toggleListboxVisibility: function () {
      if (this.open) return this.closeListbox();

      this.focusedOptionIndex = Object.keys(this.options).indexOf(this.value);

      if (this.focusedOptionIndex < 0) this.focusedOptionIndex = 0;

      this.open = true;

      this.$nextTick(() => {
        this.$refs.search.focus();

        this.$refs.listbox.children[this.focusedOptionIndex].scrollIntoView({
          block: "nearest",
        });
      });
    },
  };
}

// const swiper = new Swiper('#mySwiper', {
//   autoplay: {
//     delay: 2000,
//   },
// });

function clickDetailsSelector(){
  let a=document.getElementById("details-selector");
  let b=document.getElementById("donationType");
  let c=document.getElementById("amountValue");
  console.log(c);
  if(b.value.length>0 && c.value.length>0){
    a.click();
  }
  else{
    alert("Please fill the required fields first")
  }
}

function clickPaymentSelector(){
  let a=document.getElementById("payment-tab");
  let b=document.getElementById("donorUsername");
  let c=document.getElementById("donorEmail");
  let d=document.getElementById("donorPhoneNumber");
  if(b.value.length>0 && c.value.length>0 && d.value.length>0){
    a.click();
  }
  else{
    alert("Please fill the required fields first")
  }
}