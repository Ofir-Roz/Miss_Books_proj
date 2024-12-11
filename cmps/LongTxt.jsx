const { useState } = React;

export function LongTxt({ txt, length = 100 }) {
    const [isShowFullTxt, setIsShowFullTxt] = useState(false);

    function onClickShowMoreOrLess() {
        setIsShowFullTxt((prevShowFull) => !prevShowFull);
    }

    const isTxtTooLong = txt.length > length;
    const txtToShow = isShowFullTxt || !isTxtTooLong ? txt : txt.substring(0, length) + '...';

    return (
        <section className="long-txt">
            <p className="txt">
                {txtToShow}
                {isTxtTooLong && (
                    <button className="show-txt-btn" onClick={onClickShowMoreOrLess}>
                        {isShowFullTxt ? ' << Show Less' : 'Read More'}
                    </button>
                )}
            </p>
        </section>
    )
}