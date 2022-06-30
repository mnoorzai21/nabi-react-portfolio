import myResume from "../../images/MohammadNabiNoorzaiResume.pdf";

export default function Resume() {
  return (
    <div className="text-center text-light m-6 ">
      <div className="card-header ">
        <h2>Resume</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">Skills</h5>
        <p className="card-text">
          HTML5, CSS, Bootstrap, JavaScript, jQuery, MySQL, MongoDB, Express,
          React.js, Node.js, GraphQl
        </p>
        <a href={myResume} download className="btn btn-success mt-3">
          Download My Resume
        </a>
      </div>
    </div>
  );
}
