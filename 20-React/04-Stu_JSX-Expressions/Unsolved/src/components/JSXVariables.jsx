const nameVar = "Something";
const thought = "is turning me japannese! I really think so!"

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {nameVar}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {nameVar.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thought}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;