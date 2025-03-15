class DoorMachine {
    static state = "Terkunci"

    static ubahState(newState) {
        this.state = newState
        if (this.state == "Terkunci")
            console.log("Pintu Terkunci")
        else if (this.state == "Terbuka")
            console.log("Pintu Tidak Terkunci")
    }
}

export default DoorMachine;