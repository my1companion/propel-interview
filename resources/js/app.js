/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
import InfoSingleComponent from './components/InfoSingleComponent.vue';
import PersonalInfoComponent from './components/PersonalInfoComponent.vue';
import WorkInfoComponent from './components/WorkInfoComponent.vue';
import WorkExperienceComponent from './components/WorkExperienceComponent.vue';
import WorkExperienceSingleComponent from './components/WorkExperienceSingleComponent.vue';
import EducationComponent from './components/EducationComponent.vue';
import EducationSingleComponent from './components/EducationSingleComponent.vue';
import SkillSingleComponent from './components/SkillSingleComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import PastProjectSingleComponent from './components/PastProjectSingleComponent.vue';
import PastProjectComponent from './components/PastProjectComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import ResumeComponent from './components/ResumeComponent.vue';
import PendingTaskComponent from './components/PendingTaskComponent.vue';
import ModalComponent from './components/ModalComponent.vue';
import AddExperienceModalContent from './components/AddExperienceModalContent.vue';
import AddEducationModalContent from './components/AddEducationModalContent.vue';
import EditExperienceModalContent from './components/EditExperienceModalContent.vue';
import EditEducationModalContent from './components/EditEducationModalContent.vue';
import AddProjectModalContent from './components/AddProjectModalContent.vue';
import EditProjectModalContent from './components/EditProjectModalContent.vue';
import AddSkillModalContent from './components/AddSkillModalContent.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faUserSecret, faBell } from '@fortawesome/free-solid-svg-icons'

import {faBell} from '@fortawesome/free-regular-svg-icons'

import {faHouse, faBriefcase, faStar, faUsers, faUserPlus, faLightbulb, faTag, faBank, faArrowUpRightFromSquare,faCircleArrowRight, faPencil, faTrash, faCirclePlus, faArrowUpFromBracket, faCircleCheck, faCircle,faArrowUp,faTimes,faArrowDown, faComputer, faVault} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBell,faHouse,faBriefcase, faStar, faUsers, faUserPlus, faLightbulb, faTag, faBank, faArrowUpRightFromSquare,faCircleArrowRight, faPencil, faTrash, faCirclePlus, faArrowUpFromBracket, faCircleCheck, faCircle,faArrowUp,faTimes,faArrowDown, faComputer, faVault)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false

app.component('nav-bar', NavBar);
app.component('side-bar', SideBar);
app.component('example-component', ExampleComponent);
app.component('info-single-component', InfoSingleComponent);
app.component('personal-info-component', PersonalInfoComponent);
app.component('work-info-component', WorkInfoComponent);
app.component('work-experience-single-component', WorkExperienceSingleComponent);
app.component('work-experience-component', WorkExperienceComponent);
app.component('education-single-component', EducationSingleComponent);
app.component('education-component', EducationComponent);
app.component('skill-single-component', SkillSingleComponent);
app.component('skills-component', SkillsComponent);
app.component('past-project-single-component', PastProjectSingleComponent);
app.component('past-project-component', PastProjectComponent);
app.component('profile-component', ProfileComponent);
app.component('resume-component', ResumeComponent);
app.component('pending-task-component', PendingTaskComponent);
app.component('modal-component', ModalComponent);
app.component('add-experience-modal-content', AddExperienceModalContent);
app.component('add-education-modal-content', AddEducationModalContent);
app.component('edit-experience-modal-content', EditExperienceModalContent);
app.component('edit-education-modal-content', EditEducationModalContent);
app.component('add-project-modal-content', AddProjectModalContent);
app.component('edit-project-modal-content', EditProjectModalContent);
app.component('add-skill-modal-content', AddSkillModalContent);
app.component('footer-component', FooterComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
