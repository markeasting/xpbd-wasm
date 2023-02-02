import { Body } from './body/Body';
import { Collider, ColliderType, MeshCollider, PlaneCollider } from './collider/Collider';
import { QuatLike, Vec3Like, World } from './core/World';
import { Vec3 } from './math/Vec3.simd';

assert(ASC_FEATURE_SIMD, "Expected SIMD to be enabled");

const world = new World();

export function addBox(
    sizeX: f32, 
    sizeY: f32, 
    sizeZ: f32
): void {

    world.addBody(
        new Body(
            new MeshCollider().setGeometry(sizeX, sizeY, sizeZ)
        )
    );
}

export function addGround(): void {
    world.addBody(
        new Body(
            new PlaneCollider(new Vec3(0, 1, 0))
        )
    );
}

export function update(dt: f32): void {
    world.update(dt);
}
