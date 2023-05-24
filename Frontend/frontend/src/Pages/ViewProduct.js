import React from 'react'

export default function ViewProduct() {
  return (
    <div>
<div className="container">
        <h3 class='text-center' style={{fontFamily:'monospace',color:'Highlight'}}>Welcome our Recyling products</h3>
        <hr class="divider" />
        <div id="product">
          <div class="container-fluid p-0">
            <div class="row g-0">
              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/1P.jpg")}
                  alt="paper box"
                />
                <div class="portfolio-box-caption">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Paper box</div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/2P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Plastic Bag</div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/3P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Paper plate</div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/4P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Plastic vase</div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/5P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Plastic thread</div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/6P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption p-3">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Plastic Water bottle</div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/7P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption p-3">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Thread bundle</div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/11P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption p-3">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>Wood spoons</div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <img
                  class="img-fluid"
                  src={require("../assets/images/8P.jpg")}
                  alt="..."
                />
                <div class="portfolio-box-caption p-3">
                  <div class="text-center" style={{fontFamily:'cursive',color:'GrayText'}}>One day cups</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
