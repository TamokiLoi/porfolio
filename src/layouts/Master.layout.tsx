import BackTop from './BackTop.layout';
import Footer from './Footer.layout';
import Header from './Header.layout';

type Props = {
    children: any,
};

function MasterLayout({ children }: Props) {
    return (
        <>
            {/* <Header /> */}
            {/* select-none */}
            <div className="max-w-lg mx-auto pt-20 px-3 min-h-[60rem] scrollbar-hide">
                <main>{children}</main>
            </div>
            <Footer />
            <BackTop />
        </>
    )
}

export default MasterLayout