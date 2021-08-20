{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script> */}


        
        document.getElementById('primary-memory').addEventListener('click', function(){
             const primaryMemory = document.getElementById('memory-cost');
             primaryMemory.innerText = 0;
            

            
        });
        document.getElementById('extra-memory').addEventListener('click', function(){
             const extraMemory = document.getElementById('memory-cost');
             extraMemory.innerText = 180;
            
            
        });
        document.getElementById('primary-storage').addEventListener('click', function(){
             const primaryStorage = document.getElementById('storage-cost');
             primaryStorage.innerText = 0;
            
        });
        document.getElementById('second-storage').addEventListener('click', function(){
             const secondStorage = document.getElementById('storage-cost');
             secondStorage.innerText = 180;
            
        });
        document.getElementById('extra-storage').addEventListener('click', function(){
             const extraStorage = document.getElementById('storage-cost');
             extraStorage.innerText = 360;
            
        });
        document.getElementById('normal-delivery').addEventListener('click', function(){
             const normalDelivery = document.getElementById('delivery-cost');
             normalDelivery.innerText = 0;
            
        });

        document.getElementById('fast-delivery').addEventListener('click', function(){
             const fastDelivery = document.getElementById('delivery-cost');
             fastDelivery.innerText = 20;
            
        });
       

