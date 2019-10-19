const AdvanceStorage = artifacts.require('AdvanceStorage');

//There should be "contract block" which is equivalent "describe block" in mocha
contract('AdvanceStorage',()=>{
	//inside contract block we describe each stmt with it. "it" is function whose args is desc of test 
	let advanceStorage=null;
	before(async()=>{
		//grab the contract instance i.e the obj that points to the deployed contract on the blockchain....this is the first thing we want to do
		//creating the instance and await should have name of the smartcontract

		advanceStorage=await AdvanceStorage.deployed();//use this instance everywhere

	});//this stmt is used if you want to do some setup initially and dont repeat the code for the same again

	it('should add element to ids array',async ()=>{//call back fn i.e aync await
	await advanceStorage.add(10);
	const result=await advanceStorage.ids(0);
	assert(result.toNumber()===10);//as result will give javascript BigNumber so we need to convert it to number so we with toNumber
	//assert is a compare stmt
	});

	it('should get element ids array',async ()=>{//call back fn i.e aync await
	await advanceStorage.add(20);
	const result=await advanceStorage.get(1);
	assert(result.toNumber()===20);//as result will give javascript BigNumber so we need to convert it to number so we with toNumber
	//assert is a compare stmt
	});

	it('should get length of ids array',async ()=>{//call back fn i.e aync await
	const length=await advanceStorage.length();//will get ids array in BigNumber
	console.log(length.toNumber());
	assert(length.toNumber()===2);//as result will give javascript BigNumber so we need to convert it to number so we with toNumber
	//assert is a compare stmt
	});

	it('should get ids array',async ()=>{//call back fn i.e aync await
	const rawids=await advanceStorage.getAll();//will get ids array in BigNumber
	const ids=rawids.map(id=>id.toNumber());//will transform array to regular javascript number
	console.log(ids)
	assert.deepEqual(ids,[10,20]);//as result will give javascript BigNumber so we need to convert it to number so we with toNumber
	//assert is a compare stmt
	});	

	
});