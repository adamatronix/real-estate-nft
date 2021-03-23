const UniqueAsset = artifacts.require("UniqueAsset")

contract("token", (accounts) => {

  it("Mint NFT with Classy Fox", async () => {
    const asset = await UniqueAsset.deployed()
    const userAddr = accounts[0]
    const tx = await asset.awardItem(userAddr, "QmPfBJYGj9UNkxgvepWCRafNECx81iCbMues6DWYRRgAkF", "ipfs://QmRvGpeRDcQfVfExPnwjX6TWAnKU75SvDqAkfRSWNweYg1")
    assert.isOk(tx);
  })

})

