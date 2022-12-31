import React from 'react'
import Card from "./Card"
function CardContainer() {
  return (
    <>
    <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Card title="Code Cluster" code={`#include <iostream>\nusing namespace std;\nint main(){\n  cout<<hello world;\n} `} />
        </div>
    </div>
    </>
  )
}

export default CardContainer