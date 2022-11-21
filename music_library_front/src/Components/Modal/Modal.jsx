import SearchBar from "../SearchBar/SearchBar";
import App from "../../App";

const Modal = ({setModalOpen}) => {
    return (
        <div className="Modal-Background">
            <div className="Modal-Container">
                <div className="Modal-Title">
                    <h1>Search Results</h1>
                        <div className="Modal-Body">
                            <table>
                                <td>Title</td>
                                <td>Artist</td>
                                <td>Album</td>
                                <td>Release Date</td>
                                <td>Genre</td>
                            </table>
                            <div className="Modal-Footer">
                        <button onClick={() => setModalOpen(false)}>Close Window</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
