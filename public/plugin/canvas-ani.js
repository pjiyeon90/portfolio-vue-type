function canvasAni(){

    const { Engine, Render, Runner, World, Bodies, Body, Mouse, MouseConstraint, Events, Vertices } = Matter;
        
            // Matter.js 엔진 생성
            const engine = Engine.create();
            const world = engine.world;
        
            // 캐릭터 데이터 배열 (이미지 경로, 가로, 세로, 초기 스케일)
            const charactersData = [
                { imagePath: './img/face01.png', width: 380, height: 380, scale: 1 },
                { imagePath: './img/face02.png', width: 350, height: 320, scale: 1 },
                { imagePath: './img/face03.png', width: 380, height: 380, scale: 1 },
                { imagePath: './img/face04.png', width: 380, height: 350, scale: 1 },
                { imagePath: './img/face05.png', width: 350, height: 350, scale: 1 },
                { imagePath: './img/face06.png', width: 380, height: 380, scale: 1 }
            ];
        
            // 초기 중력 설정
            engine.world.gravity.y = 0; // 아래로 떨어지는 중력
        
                const globalCharacterRatio = 0.45;
                const globalCharacterRestitution = 0.1;
                const globalCharacterFriction = 0.005;
                const globalCharacterFrictionAir = 0.02;
                const globalCharacterAngularDamping = 0.02;
        
                const globalForceDistance = 200;	// 마우스 움직임시 영향을 받을 요소와의 거리
                const globalForceMagnitude = 0.01;	// 마우스 움직임시 영향을 받을 요소에 전해질 힘의 크기
            
        
        
        
            const renderBox = document.getElementById('memberRenderBox');
        
            // 렌더 설정
            const render = Render.create({
                element: renderBox,
                engine: engine,
                options: {
                    width: renderBox.offsetWidth,
                    height: renderBox.offsetHeight,
                    wireframes: false,
                    background: 'transparent',
                    pixelRatio: window.devicePixelRatio
                }
            });
        
            let boundaries;
            Render.run(render);
            const runner = Runner.create();
            Runner.run(runner, engine);
        
        
            // 캐릭터 추가
            const characters = [];
        
            function getRandomPosition(maxWidth, maxHeight) {
                const x = Math.random() * maxWidth; // 가로 위치 랜덤
                const y = Math.random() * (maxHeight * 0.5) - 300; // 위쪽에서 생성
                return { x, y };
            }
        
            // 캐릭터를 두 개의 중심점으로 끌어당기는 중력 구현
            Events.on(engine, 'beforeUpdate', function() {
                // 두 개의 끌어당김 좌표 설정 (블랙홀 위치)
                    const center1 = { x: renderBox.offsetWidth * 0.55, y: renderBox.offsetHeight / 2.8 };
                    const center2 = { x: renderBox.offsetWidth * 0.45, y: renderBox.offsetHeight / 2.8 };
                        characters.forEach(character => {
                    // center1과의 거리 계산
                    const deltaX1 = center1.x - character.position.x;
                    const deltaY1 = center1.y - character.position.y;
                    const distance1 = Math.sqrt(deltaX1 * deltaX1 + deltaY1 * deltaY1);
        
                    // center2와의 거리 계산
                    const deltaX2 = center2.x - character.position.x;
                    const deltaY2 = center2.y - character.position.y;
                    const distance2 = Math.sqrt(deltaX2 * deltaX2 + deltaY2 * deltaY2);
        
                    // 더 가까운 지점 선택
                    const closerCenter = distance1 < distance2 ? center1 : center2;
                    const deltaX = closerCenter.x - character.position.x;
                    const deltaY = closerCenter.y - character.position.y;
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
                    // 중심에 가까워질수록 힘을 약하게, 멀수록 강하게
                                    const forceMagnitude = 0.0001 * Math.max(1, distance);
                    
                    // 벡터 방향으로 힘 적용
                    const force = {
                        x: (deltaX / distance) * forceMagnitude,
                        y: (deltaY / distance) * forceMagnitude
                    };
        
                    // 캐릭터에 힘 적용
                    Matter.Body.applyForce(character, character.position, force);
                });
            });    
        
        
            // 마우스 컨트롤 (삭제 가능)
            const mouse = Mouse.create(render.canvas);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
            World.add(world, mouseConstraint);
            render.mouse = mouse;
        
            // 마우스 이동에 따라 캐릭터와의 거리를 계산하여 튕기는 효과 적용
            Events.on(mouseConstraint, 'mousemove', (event) => {
                const mousePosition = mouse.position; // Matter.js의 마우스 위치
        
                characters.forEach(character => {
                    const deltaX = character.position.x - mousePosition.x;
                    const deltaY = character.position.y - mousePosition.y;
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        
        
                    if (distance < globalForceDistance) {  // 일정 거리 이내의 캐릭터만 반응
                                            const forceMagnitude = globalForceMagnitude * (globalForceDistance - distance); // 150 기준
                                        const force = {
                            x: deltaX / distance * forceMagnitude,
                            y: deltaY / distance * forceMagnitude
                        };
        
                        Matter.Body.applyForce(character, character.position, force);
                    }
                });
            });
        
        
        
        
        
            // 캐릭터를 생성하는 함수
            function createCharacter(characterData, ratio = 1) {
                const { imagePath, width, height, scale } = characterData;
                const { x, y } = getRandomPosition(renderBox.offsetWidth, renderBox.offsetHeight);
        
                const vertices = [];
                const sides = 6;  //이모지 갯수 조정
                const angleStep = (Math.PI * 2) / sides;
        
                for (let i = 0; i < sides; i++) {
                    const angle = i * angleStep;
                    const vertexX = (width / 2) * Math.cos(angle) * ratio * globalCharacterRatio;
                    const vertexY = (height / 2) * Math.sin(angle) * ratio * globalCharacterRatio;
                    vertices.push({ x: vertexX, y: vertexY });
                }
        
                const character = Bodies.fromVertices(x, y, [vertices], {
                    restitution: globalCharacterRestitution,
                    friction: globalCharacterFriction,
                    frictionAir: globalCharacterFrictionAir,
                    angularDamping: globalCharacterAngularDamping,
        
                    render: {
                        sprite: {
                            texture: imagePath,
                            xScale: scale * ratio * globalCharacterRatio,
                            yScale: scale * ratio * globalCharacterRatio
                        }
                    }
                });
        
                character.inertia = Infinity;
                character.maxAngularVelocity = 0.1;
                return character;
            }
        
            // 캐릭터 배율 조정
            function resetCharacters() {
                // World에서 기존 캐릭터를 제거
                World.remove(world, characters);
                characters.length = 0;
        
        
                const ratio = renderBox.offsetWidth / 1000;
                charactersData.forEach(characterData => {
                    const character = createCharacter(characterData, ratio);
                    characters.push(character);
                    World.add(world, character);
                });
            }
        
        
            // 기존 캐릭터에 대한 스케일을 조정하는 함수
            function updateCharacterScales(ratio) {
                characters.forEach(character => {
                    const scale = character.render.sprite.xScale / globalCharacterRatio;
                    const newScale = scale * ratio;
        
                    character.render.sprite.xScale = newScale;
                    character.render.sprite.yScale = newScale;
                });
            }
        
        
                // 창 크기 변경 시 렌더 크기 조정
            window.addEventListener('resize', () => {
                render.options.width = renderBox.offsetWidth;
                render.options.height = renderBox.offsetHeight;
                render.canvas.width = renderBox.offsetWidth;
                render.canvas.height = renderBox.offsetHeight;
                /*
                const ratio = renderBox.offsetWidth / 1000; // 배율 조정
                updateCharacterScales(ratio);  // 캐릭터 배율만 조정
                */
                resetCharacters();
            });
            
            resetCharacters();



            renderBox.querySelector('canvas').addEventListener('wheel',(e)=>{
                e.stopPropagation();  //다른 이벤트 활성화 방지, 이 이벤트를 우선시 한다.
                // 캔버스 위에서 휠 작동안됨-> 작동되게 해결
                // e.preventDefault();  url 링크 방지            
            })
}
window.addEventListener('load',canvasAni)
