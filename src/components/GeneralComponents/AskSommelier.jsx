import React, { useEffect, useRef, useState } from "react"
import axios from "axios" // Importa Axios
import sommelier from "../../assets/svg/sommelier.svg"
import Modal from "./Modal"
import send from "../../assets/svg/send.svg"
import userchat from "../../assets/svg/userchat.svg"

export default function AskSommelier() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [isSending, setIsSending] = useState(false) // Stato per controllare se un messaggio è in fase di invio

  const messagesEndRef = useRef(null)

  // this use effect disables the body scroll when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  //this useEffect will scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    }
  }, [messages])

  //this function will handle the submit of the form adding the user message to the chat and sending the message to the server
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return
    setIsSending(true) // this will disable the input while the message is being sent
    const userMessage = message
    setMessages([...messages, { type: "user", text: userMessage }])
    setMessage("")

    try {
      const response = await axios.post("http://localhost:3030/ask-sommelier", { question: userMessage })
      setMessages((prevMessages) => [...prevMessages, { type: "sommelier", text: response.data.response }])
    } catch (error) {
      let errorMessage = "Sorry, something went wrong. Please try again later."
      //this if statement will check if the error is a response from the server and if it has an error message
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error
      }
      setMessages((prevMessages) => [...prevMessages, { type: "sommelier", text: errorMessage }])
    }
    setIsSending(false) // this will enable the input after the message is sent
  }

  return (
    <div>
      <img src={sommelier} alt="Ask the Sommelier" className="w-20 h-20" onClick={() => setOpen(true)} style={{ cursor: "pointer" }} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col justify-between h-full">
          <div className="mt-3 overflow-y-auto scroll-smooth" ref={messagesEndRef}>
            {/* Welcome message from sommelier */}
            <div className="flex items-center w-full gap-2 p-2 mt-2 text-white bg-thema4/90 rounded-xl">
              <img src={sommelier} className="inline-block w-10" alt="" />
              <span className="break-words">Hi! How can I help you?</span>
            </div>
            {/* User and Sommelier messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-center w-full gap-2 p-2 mt-2 ${
                  msg.type === "user" ? "text-black bg-black/30" : "text-white bg-thema4/90"
                } rounded-xl`}
              >
                <img src={msg.type === "user" ? userchat : sommelier} className="inline-block w-10" alt="chat-icon" />
                <span
                  className={`break-words ${msg.type === "sommelier" ? "text-white" : ""}`}
                  style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <form onSubmit={handleSubmit} className="flex mt-6">
              <input
                type="search"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me something!"
                className="w-full p-2 text-thema3 bg-thema rounded-l-xl focus:outline-none focus:shadow-sm focus:shadow-thema4"
                disabled={isSending} //this will disable the input while the message is being sent
              />
              <button type="submit" className="px-2 text-white bg-thema4 rounded-r-xl hover:bg-thema4" disabled={isSending}>
                <img src={send} alt="send-button" className="w-7" />
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  )
}
