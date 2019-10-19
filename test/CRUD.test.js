const CRUD = artifacts.require('CRUD');

contract('CRUD',()=>{
	//inside contract block we describe each stmt with it. "it" is function whose args is desc of test 
	let crud=null;
	before(async()=>{
		//grab the contract instance i.e the obj that points to the deployed contract on the blockchain....this is the first thing we want to do
		//creating the instance and await should have name of the smartcontract

		crud=await CRUD.deployed();//use this instance everywhere

	});//this stmt is used if you want to do some setup initially and dont repeat the code for the same again


	it('should create a new user',async ()=>{//call back fn i.e aync await
	await crud.create('Frank');
	const user = await crud.read(1);
	assert(user[0].toNumber()===1);//as result will give javascript BigNumber so we need to convert it to number so we with toNumber
	//assert is a compare stmt
	assert(user[1]==='Frank');
	});

	it('should update a new user',async ()=>{//call back fn i.e aync await
	await crud.update(1,'Frankk');
	const user = await crud.read(1);
	assert(user[0].toNumber()===1);//as result will give javascript BigNumber so we need to convert it to number so we with toNumber
	//assert is a compare stmt
	assert(user[1]==='Frankk');
	});

	it('should not update a non existing user',async ()=>{//call back fn i.e aync await
	try{
	await crud.update(2,'Frankkk');
}catch(e){
	assert(e.message.includes('Users does not exist!'));
	return;	
}

assert(false);
});

	it('should update a new user',async ()=>{//call back fn i.e aync await
	await crud.destroy(1);
	try{
		await crud.read(1);
	}catch(e){
		assert(e.message.includes('Users does not exist!'));
	return;
	}
	
	assert(false);
});
	it('should not destroy non-exist user',async ()=>{//call back fn i.e aync await
	try{
		await crud.destroy(10);
	}catch(e){
		assert(e.message.includes('Users does not exist!'));
		return;
	}
	assert(false);

});
});