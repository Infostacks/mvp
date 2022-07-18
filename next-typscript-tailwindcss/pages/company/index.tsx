import Head from "next/head";
import CompanySignUp from '../../components/CompanySignup'

const index = () => {
    return (
        <div>
            <Head>
                <title>Characters</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="bg-violet-50">
                    <CompanySignUp/>
                </div>
            </main>
        </div>
    );
}

export default index;