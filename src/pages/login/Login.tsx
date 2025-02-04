import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";


function NovoLogin() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario && usuario.token !== "") {
            navigate("/home");
        }
    }, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <>
            <div className="flex w-full h-screen bg-gray-100">
                <div className="hidden relative lg:flex flex-col h-full w-1/2 items-center justify-center bg-gray-900">
                    <img
                        src="https://i.imgur.com/fBJcXWf.png"
                        alt="LogoDevlivery"
                    />
                    <Link to='/home'
                        type="submit"
                        className="w-1/2 hover:bg-orange-600 hover:text-white py-3 rounded-xl bg-white
                                        text-black text-lg flex font-bold justify-center">
                        <span>Voltar para Home</span>
                    </Link>
                </div>
                <div className="w-full flex flex-col items-center justify-center lg:w-1/2">
                    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
                        <h1 className="text-5xl font-semibold">Bem vindo!</h1>
                        <p className="font-medium text-lg text-gray-500 mt-4">Entre e aproveite os benefícios de ser cliente</p>
                        <form className="mt-8"
                            onSubmit={login}>
                            <div>
                                <label className="text-lg font-medium">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder="Entre com seu email"
                                    value={usuarioLogin.email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        atualizarEstado(e)
                                    }
                                />
                            </div>
                            <div>
                                <label className="text-lg font-medium">Password</label>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder="Entre com sua senha"
                                    value={usuarioLogin.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        atualizarEstado(e)
                                    }
                                />
                            </div>
                            <div className="mt-8 flex flex-col gap-y-4">
                                <button
                                    type="submit"
                                    className="hover:bg-indigo-900 py-3 rounded-xl bg-gray-900
                                        text-white text-lg flex font-bold justify-center">

                                    {isLoading ? (
                                        <RotatingLines
                                            strokeColor="white"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="24"
                                            visible={true}
                                        />
                                    ) : (
                                        <span>Entrar</span>
                                    )}
                                </button>
                            </div>
                            <div className="mt-8 flex justify-center items-center">
                                <p className="font-medium text-base">Não tem uma conta?</p>
                                <Link to="/cadastro" className="text-indigo-900 text-bold font-medium ml-2">
                                    Cadastre-se
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NovoLogin;
