class RoundRobin {

    //use singleton
    constructor() {
        if (RoundRobin.instance) {
            return RoundRobin.instance;
        }

        RoundRobin.instance = this;
        this.servers = [];
        this.index = 0;
    }

    //add server 
    addServer(server) {
        this.servers.push(server);
    }

    //get next server 
    getNextServer() {
        if (!this.servers.length) {
            throw new Error("No server available !!!")
        }

        //use modulus
        const server = this.servers[this.index];
        this.index = (this.index + 1) % this.servers.length;
        console.log('update index:::::', this.index);
        return server
    }

    //get servers
    getServers() {
        return this.servers;
    }
}

const loadBalancer = new RoundRobin();
const loadBalancer1 = new RoundRobin();

loadBalancer.addServer("Server 01");
loadBalancer.addServer("Server 02");
loadBalancer.addServer("Server 03");
loadBalancer1.addServer("Server 04");

console.log(loadBalancer.getServers())
console.log(loadBalancer1.getServers())

console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())
console.log(loadBalancer.getNextServer())

