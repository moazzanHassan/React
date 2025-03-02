import React from 'react'

const CreateTasks = () => {
  return (
    <div>
  <form className="flex flex-wrap bg-red-300 justify-between items-start" style={{ padding: "20px", margin: "20px" }}>
    <div className="w-1/2" style={{ paddingRight: "10px" }}>
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#333", marginBottom: "5px" }}>Task Title</h3>
        <input 
          type="text" 
          placeholder="Design a UI design" 
          style={{ 
            padding: "10px", 
            marginTop: "5px", 
            backgroundColor: "white", 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            width: "100%",
            color: "#000" 
          }} 
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#333", marginBottom: "5px" }}>Date</h3>
        <input 
          type="date" 
          style={{ 
            padding: "10px", 
            marginTop: "5px", 
            backgroundColor: "white", 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            width: "100%",
            color: "#000" 
          }} 
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#333", marginBottom: "5px" }}>Assign To</h3>
        <input 
          type="text" 
          placeholder="emp name" 
          style={{ 
            padding: "10px", 
            marginTop: "5px", 
            backgroundColor: "white", 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            width: "100%",
            color: "#000" 
          }} 
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#333", marginBottom: "5px" }}>Category</h3>
        <input 
          type="text" 
          placeholder="design, dev, etc" 
          style={{ 
            padding: "10px", 
            marginTop: "5px", 
            backgroundColor: "white", 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            width: "100%",
            color: "#000" 
          }} 
        />
      </div>
    </div>
    
    {/* Description Box */}
    <div className="w-1/2" style={{ paddingLeft: "10px" }}>
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ color: "#333", marginBottom: "5px" }}>Description</h3>
        <textarea 
          rows="4" 
          placeholder="Enter task details..." 
          style={{ 
            padding: "10px", 
            marginTop: "5px", 
            backgroundColor: "white", 
            border: "1px solid #ccc", 
            borderRadius: "5px", 
            width: "100%",
            color: "#000" 
          }} 
        ></textarea>
      </div>
    </div>

    {/* Button with spacing */}
    <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
      <button 
        style={{ 
          padding: "12px 25px", 
          backgroundColor: "#ff5733", 
          color: "white", 
          borderRadius: "8px", 
          border: "none", 
          cursor: "pointer",
          fontSize: "16px"
        }}>
        Create Task
      </button>
    </div>
  </form>
        </div>
  )
}

export default CreateTasks