import Image from "next/image";
import Link from "next/link";

export const Badges = () => {
  return (
    <div className="flex flex-row gap-3 my-3">
      <Link
        href="https://github.com/transac-ai/transacai/actions/workflows/build.yml"
        className="no-style-link"
        title="Pre-deploy Workflow"
      >
        <Image
          src="https://github.com/transac-ai/transacai/actions/workflows/build.yml/badge.svg"
          alt="Pre-deploy Workflow"
          priority={false}
          width={200}
          height={50}
        />
      </Link>

      <Link
        href="https://github.com/transac-ai/transacai/actions/workflows/codeql.yml"
        className="no-style-link"
        title="CodeQL Scan"
      >
        <Image
          src="https://github.com/transac-ai/transacai/actions/workflows/codeql.yml/badge.svg?branch=main"
          alt="CodeQL Scan"
          priority={false}
          width={120}
          height={50}
        />
      </Link>

      <Link
        href="https://github.com/transac-ai/transacai/actions/workflows/dependency-review.yml"
        className="no-style-link"
        title="Dependency review"
      >
        <Image
          src="https://github.com/transac-ai/transacai/actions/workflows/dependency-review.yml/badge.svg"
          alt="Dependency review"
          priority={false}
          width={190}
          height={50}
        />
      </Link>

      <Link
        href="https://github.com/transac-ai/transacai/actions/workflows/publish-npm.yml"
        className="no-style-link"
        title="Publish package to NPM"
      >
        <Image
          src="https://github.com/transac-ai/transacai/actions/workflows/publish-npm.yml/badge.svg?event=release"
          alt="Publish package to NPM"
          priority={false}
          width={210}
          height={50}
        />
      </Link>

      <Link
        href="https://www.npmjs.com/package/@transac-ai/transacai"
        className="no-style-link"
        title="NPM version"
      >
        <Image
          src="https://badge.fury.io/js/@oconva%2Fqvikchat.svg"
          alt="NPM version"
          priority={false}
          width={130}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Badges;
