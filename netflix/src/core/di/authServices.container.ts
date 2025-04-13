import { Container } from "inversify";
import { IAuthService } from "../../model/services/base/auth.services";
import { AuthServiceImpl } from "../../model/services/auth.services";
import { IAuthViewModel } from "../../viewModel/base/auth.viewmodel";
import { AuthViewModelImpl } from "../../viewModel/auth.viewmodel";

const authContainer = new Container();

authContainer.bind<IAuthService>('IAuthService').to(AuthServiceImpl);
authContainer.bind<IAuthViewModel>('IAuthViewModel').to(AuthViewModelImpl);

export default authContainer;