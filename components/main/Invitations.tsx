import Invitation from "./Invitation";

function Invitations({ invites }) {
  console.log("**********");
  console.log(invites);
  console.log("**********");
  return (
    <div className="flex flex-row md:flex-row mx-auto px-auto flex-wrap justify-around">
      <Invitation invites={invites} />
    </div>
  );
}

export default Invitations;
