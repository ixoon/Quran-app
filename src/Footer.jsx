
function Footer(){

    const getHijriYear = () => {
        const gregorianYear = new Date().getFullYear();
        const hijriYear = Math.floor((gregorianYear - 622) * 33 / 32) + 1;
        return hijriYear;
    }
    return(
        <div>
            <h1>{getHijriYear}</h1>
        </div>
    );

}

export default Footer;