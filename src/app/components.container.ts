
import { AppComponent as appComponent } from './components/app/app.component';
import { AdminComponent as adminComponent} from './components/admin/admin.component';
import { LoginComponent as loginComponent} from './components/login/login.component';
import { HomeComponent as homeComponent} from './components/home/home.component';
import { HeaderComponent as headerComponent} from './components/header/header.component';
import { LoginButtonComponent as loginButtonComponent} from './components/header/login-button/login-button.component';

export const AppComponent = appComponent;
export const AdminComponent = adminComponent
export const LoginComponent = loginComponent
export const HomeComponent = homeComponent
export const HeaderComponent = headerComponent
export const LoginButtonComponent = loginButtonComponent

export const routingComponents = [
  AdminComponent,
  LoginComponent,
  HomeComponent,
  HeaderComponent,
  LoginButtonComponent
];

// export { AppComponent } from "./components/app/app.component";
