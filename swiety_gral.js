// var answ1 = {
// 	question: "What method is used to apply an IPv6 ACL to a router interface?",
// 	answer1: "the use of  the ipv6 traffic-filter command",
// 	answer2: "",
// 	answer3: ""
// };

// var answ2 = {
// 	question: "In which configuration would an outbound ACL placement be preferred over an inbound ACL placement?",
// 	answer1: "when the ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface",
// 	answer2: "",
// 	answer3: ""
// };

// var answ3 = {
// 	question: "What is the only type of ACL available for IPv6?",
// 	answer1: "named extended",
// 	answer2: "",
// 	answer3: ""
// };

var Answer = function (question, ans1, ans2, ans3) {
    this.question = question;
	this.ans1 = ans1;
	this.ans2 = ans2;
	this.ans3 = ans3;
};

var answ1 = new Answer("Which type of static route is configured with a greater administrative distance to provide a backup route to a route learned from a dynamic routing protocol?", 
						"floating static route");
var answ2 = new Answer("A network administrator reviews the routing table on the router and sees a route to the destination network 172.16.64.0/18 with a next-hop IP address of 192.168.1.1. What are two descriptions of this route? (Choose two.)", 
						"level 2 child route", 
						"ultimate route");
var answ3 = new Answer("Which two factors are important when deciding which interior gateway routing protocol to use? (Choose two.)", 
						"scalability", 
						"speed of convergence");
var answ4 = new Answer("Employees of a company connect their wireless laptop computers to the enterprise LAN via wireless access points that are cabled to the Ethernet ports of switches. At which layer of the three-layer hierarchical network design model do these switches operate?", 
						"access");
var answ5 = new Answer("What is a basic function of the Cisco Borderless Architecture access layer?", 
						"provides access to the user");
var answ6 = new Answer("What network prefix and prefix-length combination is used to create a default static route that will match any IPv6 destination?", 
						"::/0");
var answ7 = new Answer("A router has used the OSPF protocol to learn a route to the 172.16.32.0/19 network. Which command will implement a backup floating static route to this network?", 
						"ip route 172.16.32.0 255.255.224.0 S0/0/0 200");
var answ8 = new Answer("Which statement describes a route that has been learned dynamically?", 
						"It is automatically updated and maintained by routing protocols.");
var answ9 = new Answer("Compared with dynamic routes, what are two advantages of using static routes on a router? (Choose two.)",
						"They Improve network security",
						"They use fewer router resources");
var answ10 = new Answer("To enable RIP routing for a specific subnet, the configuration command network 172.16.64.32 was entered by the network administrator. What address, if any, appears in the running configuration file to identify this network?",
						"172.16.0.0");
var answ11 = new Answer("A network administrator adds the default-information originate command to the configuration of a router that uses RIP as the routing protocol. What will result from adding this command?",
						"The router will propagate a static default route in its RIP updates, if one is present");
var answ12 = new Answer("Which route will a router use to forward an IPv4 packet after examining its routing table for the best match with the destination address?",
						"a level 1 ultimate route");
var answ13 = new Answer("What is a characteristic of the distribution layer in the three layer hierarchical model?",
						"provides access to the rest of the network through switching, routing, and network access policies");
var answ14 = new Answer("Which information does a switch use to populate the MAC address table?",
						"the source MAC address and the incoming port");
var answ15 = new Answer("Which statement is correct about Ethernet switch frame forwarding decisions?",
						"Frame forwarding decisions are based on MAC address and port mappings in the CAM table");
var answ16 = new Answer("What is the name of the layer in the Cisco borderless switched network design that would have more switches deployed than other layers in the network design of a large organization?",
							"access");
var answ17 = new Answer("Which switching method drops frames that fail the FCS check?",
						"store-and-forward switching");		
var answ18 = new Answer("In what situation would a Layer 2 switch have an IP address configured ?",
						"when the Layer 2 switch needs to be remotely managed");	
var answ19 = new Answer("A network administrator is configuring a new Cisco switch for remote management access. Which three items must be configured on the switch for the task? (Choose three.)",
						"loopback address",
						"default VLAN",
						"IP address");		
var answ20 = new Answer("A network technician has been asked to secure all switches in the campus network. The security requirements are for each switch to automatically learn and add MAC addresses to both the address table and the running configuration. Which port security configuration will meet these requirements?",
						"sticky secure MAC addresses");
var answ21 = new Answer("A network administrator is configuring port security on a Cisco switch. When a violation occurs, which violation mode that is configured on an interface will cause packets with an unknown source address to be dropped with no notification sent?",
						"protect");
var answ22 = new Answer("A Cisco Catalyst switch has been added to support the use of multiple VLANs as part of an enterprise network. The network technician finds it necessary to clear all VLAN information from the switch in order to incorporate a new network design. What should the technician do to accomplish this task?",
						"Delete the startup configuration and the vlan.dat file in the flash memory of the switch and reboot the switch");
var answ23 = new Answer("What will a Cisco LAN switch do if it receives an incoming frame and the destination MAC address is not listed in the MAC address table?",
						"Forward the frame out all ports except the port where the frame is received.");
var answ24 = new Answer("What VLANs are allowed across a trunk when the range of allowed VLANs is set to the default value?",
						"All VLANs will be allowed across the trunk");
var answ25 = new Answer("A network administrator is designing an ACL. The networks 192.168.1.0/25, 192.168.0.0/25, 192.168.0.128/25, 192.168.1.128/26, and 192.168.1.192/26 are affected by the ACL. Which wildcard mask, if any, is the most efficient to use when specifying all of these networks in a single ACL permit entry?",
						"0.0.1.255");
var answ26 = new Answer("The computers used by the network administrators for a school are on the 10.7.0.0/27 network. Which two commands are needed at a minimum to apply an ACL that will ensure that only devices that are used by the network administrators will be allowed Telnet access to the routers? (Choose two.)",
						"access-class 5 in",
						"access-list 5 permit 10.7.0.0 0.0.0.31");
var answ27 = new Answer("A network engineer has created a standard ACL to control SSH access to a router. Which command will apply the ACL to the VTY lines?",
						"access-class 11 in");
var answ29 = new Answer("What is the reason why the DHCPREQUEST message is sent as a broadcast during the DHCPv4 process?",
							"to notify other DHCP servers on the subnet that the IP address was leased");	
var answ30 = new Answer("Which command, when issued in the interface configuration mode of a router, enables the interface to acquire an IPv4 address automatically from an ISP, when that link to the ISP is enabled?",
						"ip address dhcp");	
var answ31 = new Answer("What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
						"address of the IPv6 enabled interface");				
var answ32 = new Answer("Which type of traffic would most likely have problems when passing through a NAT device?",
						"IPsec");	
var answ33 = new Answer("A small company has a web server in the office that is accessible from the Internet. The IP address 192.168.10.15 is assigned to the web server. The network administrator is configuring the router so that external clients can access the web server over the Internet. Which item is required in the NAT configuration?",
						"the ip nat inside source command to link the inside local and inside global addresses");	
var answ34 = new Answer("A network engineer is interested in obtaining specific information relevant to the operation of both distribution and access layer Cisco devices. Which command provides common information relevant to both types of devices?",
						"show cdp neighbors");	
var answ35 = new Answer("Which two statements are correct if a configured NTP master on a network cannot reach any clock with a lower stratum number? (Choose two.)",
						"The NTP master will claim to be synchronized at the configured stratum number.",
						"Other systems will be willing to synchronize to that master using NTP.");	
var answ36 = new Answer("What are three functions provided by the syslog service? (Choose three.)",
						"to specify the destinations of captured messages",
						"to select the type of logging information that is captured",
						"to gather logging information for monitoring and troubleshooting");	
var answ37 = new Answer("When a customer purchases a Cisco IOS 15.0 software package, what serves as the receipt for that customer and is used to obtain the license as well?",
						"Product Activation Key");	
var answ38 = new Answer("What benefit does NAT64 provide?",
						"It allows sites to connect IPv6 hosts to an IPv4 network by translating the IPv6 addresses to IPv4 addresses.");	
var answ39 = new Answer("What is the effect of configuring the ipv6 unicast-routing command on a router?",
						"to enable the router as an IPv6 router");	
var answ40 = new Answer("What is a characteristic of a static route that creates a gateway of last resort?",
						"It identifies the gateway IP address to which the router sends all IP packets for which it does not have a learned or static route");	
var answ41 = new Answer("Which network design may be recommended for a small campus site that consists of a single building with a few users?",
						"a collapsed core network design");
var answ42 = new Answer("Which information does a switch use to keep the MAC address table information current?",
						"the source MAC address and the incoming port");
var answ43 = new Answer("Which advantage does the store-and-forward switching method have compared with the cut-through switching method?",
						"frame error checking");
var answ44 = new Answer("Which characteristic describes cut-through switching?",
						"Error-free fragments are forwarded, so switching accurs with lower latency.");	
var answ45 = new Answer("What is a result of connecting two or more switches together?",
						"The size of the broadcast domain is increased.");
var answ46 = new Answer("A part of the new security policy, all switches on the network are configured to automatically learn MAC addresses for each port. All running configurations are saved at the start and close of every business day. A severe thunderstorm causes an extended power outage several hours after the close of business. When the switches are brought back online, the dynamically learned MAC addresses are retained. Which port security configuration enabled this?",
						"sticky secure MAC addresses");
var answ47 = new Answer("Which commands are used to re-enable a port that has been disabled as a result of a port security violation?",
						"shutdown no shutdown");
var answ48 = new Answer("Which two characteristics describe the native VLAN? (Choose two.)",
						"The native VLAN traffic will be untagged across the trunk link.",
						"The native VLAN provides a common identifier to both ends of a trunk.");
var answ49 = new Answer("Which type of traffic is designed for a native VLAN?",
						"untagged");
var answ50 = new Answer("Which statement describes a characteristic of the extended range VLANs that are created on a Cisco 2960 switch?",
						"They are not stored in the vlan.dat file.");
var answ51 = new Answer("What will be the result of adding the command ip dhcp excluded-address 172.16.4.1 172.16.4.5 to the configuration of a local router that has been configured as a DHCP server?",
						"The DHCP server function of the router will not issue the addresses from 172.16.4.1 through 172.16.4.5 inclusive.");
var answ52 = new Answer("A host on the 10.10.100.0/24 LAN is not being assigned an IPv4 address by an enterprise DHCP server with the address 10.10.200.10/24. What is the best way for the network engineer to resolve this problem?",
						"Issue the command ip helper-address 10.10.200.10 on the router interface that is the 10.10.100.0/24 gateway.");
var answ53 = new Answer("What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
						"the MAC address of the IPv6 enabled interface");
var answ54 = new Answer("An administrator is trying to remove configurations from a switch. After using the command erase startup-config and reloading the switch, the administrator finds that VLANs 10 and 100 still exist on the switch. Why were these VLANs not removed?",
						"Because these VLANs are stored in a file that is called vlan.dat that is located in flash memory, this file must be manually deleted.");
var answ55 = new Answer("A network administrator is configuring an ACL with the command access-list 10 permit 172.16.32.0 0.0.15.255. Which IPv4 address matches the ACE?",
						"172.16.47.254");
var answ56 = new Answer("A network administrator is verifying a configuration that involves network monitoring. What is the purpose of the global configuration command logging trap 4?",
						"System messages that match logging levels 0-4 will be forwarded to a specified logging device.");
var answ57 = new Answer("What is indicated by the M in the Cisco IOS image name c1900-universalk9-mz.SPA.153-3.M.bin?",
						"an extended maintenance release");
var answ58 = new Answer("Refer to the exhibit. Which highlighted value represents a specific destination network in the routing table?",
						"172.16.100.64");
var answ59 = new Answer("On which two routers would a default static route be configured? (Choose two.)",
						"stub router connection to the rest of the corporate or campus network",
						"edge router connection to the ISP");
var answ60 = new Answer("Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?",
						"Change the destination network and mask to 0.0.0.0 0.0.0.0");
var answ61 = new Answer("What caused the following error message to appear?01:11:12: %PM-4-ERR_DISABLE: psecure-violation error detected on Fa0/8, putting Fa0/8 in err-disable state01:11:12: %PORT_SECURITY-2-PSECURE_VIOLATION: Security violation occurred, caused by MAC address 0011.a0d4.12a0 on port FastEthernet0/8.01:11:13: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/8, changed state to down01:11:14: %LINK-3-UPDOWN: Interface FastEthernet0/8, changed state to down",
						"Port security was enabled on the switch port, and an unauthorized connection was made on switch port Fa0/8.");
var answ62 = new Answer("What is the purpose of the Cisco PAK?",
						"It is a key for enabling an IOS feature set.");

var answers = [
	answ1, answ2, answ3, answ4, answ5, answ6, answ7, answ8, answ9, answ10, answ11, answ12, answ13, answ14, answ15, answ16, answ17, answ18, answ19, answ20, answ21, answ22,
	answ23, answ24, answ25, answ26, answ27, answ29, answ30, answ31, answ32, answ33, answ34, answ35, answ36, answ37, answ38, answ39, answ40, answ41, answ42, answ43,
	answ44, answ45, answ46, answ47, answ48, answ49, answ50, answ51, answ52, answ53, answ54, answ55, answ56, answ57, answ58, answ59, answ60, answ61, answ62
];



for(let i = 0; i < answers.length; i++){
	if(document.querySelectorAll(".coreContent")[0].textContent.slice(0,50) === answers[i].question.slice(0,50)){
		let odp = document.querySelectorAll(".ai-option");
		for(let j = 0; j < odp.length; j++){
			if(odp[j].textContent === answers[i].ans1) odp[j].textContent += ".....";
			if(odp[j].textContent === answers[i].ans2) odp[j].textContent += ".....";
			if(odp[j].textContent === answers[i].ans3) odp[j].textContent += ".....";
		}
	}
}
	





// for(var i = 0; i < answers.length; i++){
// 	document.querySelectorAll(".post-content")[0].querySelectorAll("p:nth-of-type(2n)")[i].querySelectorAll("span")[0].textContent
// }