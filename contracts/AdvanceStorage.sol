pragma solidity  ^0.5.2;

/**
 * The  contract does this and that...
 */
contract AdvanceStorage  {
	uint[] public ids;
	function add (uint _id) public {//add the element to the arrary
		ids.push(_id);				
	}
	function get (uint _i) view public returns(uint) {//return any element to the array
		return ids[_i];			
		}
	function getAll () view public returns(uint[] memory) {//return all the element to the array
		return ids;
	}
	function length () view public returns(uint) {//return length of the array
		return ids.length;
	}
	
	
			
}

