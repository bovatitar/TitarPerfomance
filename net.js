




<button onclick="start();"></button>
<script>
var list = {
	"Which term refers to a network that provides secure access to the corporate offices by suppliers, customers and collaborators?" : "extranet",
	"A small business user is looking for an ISP connection that provides high speed digital transmission over regular phone lines. What ISP connection type should be used?":"DSL",
	"Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?":"The administrator must first enter privileged EXEC mode before issuing the command",
	"Which keys act as a hot key combination that is used to interrupt an IOS process?":"Ctrl-Shift-6",
	"Refer to the exhibit. A network administrator is configuring access control to switch SW1. If the administrator uses Telnet to connect to the switch, which password is needed to access user EXEC mode?":"linevtyin",
	"A network administrator enters the service password­encryption command into the configuration mode of a router. What does this command accomplish?":"This command prevents someone from viewing the running configuration passwords",
	"What is the purpose of the SVI on a Cisco switch?":"The SVI provides a virtual interface for remote access to the switch",
	"Which message delivery option is used when all devices need to receive the same message simultaneously?":"broadcast",
	"Which two protocols function at the internet layer? (Choose two.)":["ICMP","IP"],
	"What PDU is associated with the transport layer?":"segment",
	"What is done to an IP packet before it is transmitted over the physical medium?":"It is encapsulated in a Layer 2 frame.",
	"What type of communication medium is used with a wireless LAN connection?":"radio waves",
	"In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? (Choose two.)":["crosstalk","electromagnetic interference"],
	"What are the two sublayers of the OSI model data link layer? (Choose two.)":["MAC","LLC"],
	"A technician has been asked to develop a physical topology for a network that provides a high level of redundancy. Which physical topology requires that every node is attached to every other node on the network?":"mesh",
	"What type of communication rule would best describe CSMA/CD?":"access method",
	"If data is being sent over a wireless network, then connects to an Ethernet network, and eventually connects to a DSL connection, which header will be replaced each time the data travels through a network infrastructure device?":"data link",
	"What best describes the destination IPv4 address that is used by multicasting?":"a single IP multicast address that is used by all destinations in a group",
	"In an Ethernet network, when a device receives a frame of 1200 bytes, what will it do?":"process the frame as it is",
	"What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?":"destination MAC address",
	"What will a Layer 2 switch do when the destination MAC address of a received frame is not in the MAC table?":"It forwards the frame out of all ports except for the port at which the frame was received.",
	"What are two features of ARP? (Choose two.)":["If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.","If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply."],
	"Which two services are required to enable a computer to receive dynamic IP addresses and access the Internet using domain names? (Choose two.)":["DNS","DHCP"],
	"What is a basic characteristic of the IP protocol?":"connectionless",
	"Refer to the exhibit. A user issues the command netstat –r on a workstation. Which IPv6 address is one of the link-local addresses of the workstation?":"fe80::30d0:115:3f57:fe4c/128",
	"An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?":"all IPv6 configured routers on the local link",
	"What is the purpose of ICMP messages?":"to provide feedback of IP packet transmissions",
	"Which statement describes a characteristic of the traceroute utility?":"It identifies the routers in the path from a source host to a destination host.",
	"What is the usable number of host IP addresses on a network that has a /26 mask?":"62",
	"Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?":"172.16.19.255",
	"Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?":"2001:db8:0:f000::/52",
	"A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?":"The data flow is being tracked based on the source port number utilized by each application.*",
	"What three services are provided by the transport layer? (Choose three.)":["connection establishment", "flow control", "error recovery"],
	"An Internet television transmission is using UDP. What happens when part of the transmission is not delivered to the destination?":"The transmission continues without the missing portion.",
	"Which two OSI model layers are considered to be included in the top layer of the TCP/IP protocol stack? (Choose two.)":["presentation","session"],
	"An author is uploading one chapter document from a personal computer to a file server of a book publisher. What role is the personal computer assuming in this network model?":"client",
	"Which two automatic addressing assignments are supported by DHCPv4? (Choose two.)":["subnet mask","default gateway address"],
	"When a network administrator is trying to manage network traffic on a growing network, when should traffic flow patterns be analyzed?":"during times of peak utilization",
	"What is the objective of a network reconnaissance attack?":"discovery and mapping of systems",
	"A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?":"This command prevents someone from viewing the running configuration passwords.",
	"What will be the result of failed login attempts if the following command is entered into a router? login block-for 150 attempts 4 within 90":"All login attempts will be blocked for 150 seconds if there are 4 failed attempts within 90 seconds.",
	"Which two statements correctly describe a router memory type and its contents? (Choose two.)":["RAM is volatile and stores the IP routing table.","ROM is nonvolatile and contains basic diagnostic software."],
	"A user reports a lack of network connectivity. The technician takes control of the user machine and attempts to ping other computers on the network and these pings fail. The technician pings the default gateway and that also fails. What can be determined for sure by the results of these tests?":"Nothing can be determined for sure at this point.",
	"For Cisco IOS, which escape sequence allows terminating a traceroute operation?":"Ctrl+Shift+6",
	"Match the phases to the functions during the boot up process of a Cisco router. (Not all options are used.)":"-",
	"What three blocks of addresses are defined by RFC 1918 for private network use? (Choose three.)":["10.0.0.0/8*172.16.0.0/12", "192.168.0.0/16"],
	"A network administrator is variably subnetting a given block of IPv4 addresses. Which combination of network addresses and prefix lengths will make the most efficient use of addresses when the need is for 2 subnets capable of supporting 10 hosts and 1 subnet that can support 6 hosts?":"10.1.1.128/28,10.1.1.144/28,10.1.1.160/29",
	"Match the descriptions to the terms. (Not all options are used.)":"-",
	"Match the requirements of a reliable network with the supporting network architecture. (Not all options are used.)":"",
	"Match the functions with the corresponding OSI layer. (Not all options are used.)":"",
	"":""
}
var html = ""
function search(question, change = false){
	success = false;
	Object.keys(list).forEach(function(item){
		if(item.match(question)){
			success = true;
			if(typeof list[item] === "object"){
				list[item].forEach(function(answer){
					console.log(answer);
					if(change == true){
						html = document.body.innerHTML;
						html = html.replace("/"+list[item]+"/gi", list[item]+"*")
						document.body.innerHTML = html;
					}

				})
			}else{
				console.log(list[item]);
				if(change == true){
					html = document.body.innerHTML;
					html = html.replace("/"+list[item]+"/gi", list[item]+"*")
					document.body.innerHTML = html;
				}

			}
		}
	})
	if(success == false){
		console.log("-");
	}
}
	document.addEventListener("copy", function(e) {
	    console.log("copyListener start"), e.preventDefault();
	    var t = window.getSelection().toString();
	    search(t,true);
	});
</script>