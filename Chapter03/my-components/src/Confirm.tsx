import * as React from "react";
import "./Confirm.css";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

// class Confirm extends React.Component<IProps> {
//   public static defaultProps = {
//     cancelCaption: "Cancel",
//     okCaption: "Okay"
//   };
//   public render() {
//     return (
//       <div
//         className={
//           this.props.open
//             ? "confirm-wrapper confirm-visible"
//             : "confirm-wrapper"
//         }
//       >
//         <div className="confirm-container">
//           <div className="confirm-title-container">
//             <span>{this.props.title}</span>
//           </div>
//           <div className="confirm-content-container">
//             <p>{this.props.content}</p>
//           </div>
//           <div className="confirm-buttons-container">
//             <button className="confirm-cancel" onClick={this.handleCancelClick}>
//               {this.props.cancelCaption}
//             </button>
//             <button className="confirm-ok" onClick={this.handleOkClick}>
//               {this.props.okCaption}
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   private handleOkClick = () => {
//     this.props.onOkClick();
//   };

//   private handleCancelClick = () => {
//     this.props.onCancelClick();
//   };
// }

// function component
const Confirm: React.FC<IProps> = props => {
  const [cancelClickCount, setCancelClickCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Confirm first rendering");
  }, []);

  React.useEffect(() => {
    console.log("Confirm rendering");
  });

  // React.useEffect(
  //   () => {
  //     console.log("open changed");
  //   },
  //   [props.open]
  // );

  // React.useEffect(() => {
  //   console.log("Confirm first rendering");
  //   return () => {
  //     console.log("Confirm unmounted");
  //   };
  // }, []);

  const handleOkClick = () => {
    props.onOkClick();
  };

  const handleCancelClick = () => {
    const newCount = cancelClickCount + 1;
    setCancelClickCount(newCount);
    if (newCount >= 2) {
      props.onCancelClick();
    }
  };
  return (
    <div
      className={
        props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"
      }
    >
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{props.title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{props.content}</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel" onClick={handleCancelClick}>
            {cancelClickCount === 0 ? props.cancelCaption : "Really?"}
          </button>
          <button className="confirm-ok" onClick={handleOkClick}>
            {props.okCaption}
          </button>
        </div>
      </div>
    </div>
  );
};

Confirm.defaultProps = {
  cancelCaption: "Cancel",
  okCaption: "Okay"
};

// export default Confirm;

const ConfirmMemo = React.memo(Confirm);
export default ConfirmMemo;
